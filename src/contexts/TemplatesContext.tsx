import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { TemplateDTO } from "../types/TemplateDTO";
import { formatCountByStep } from "../utils/formatCountByStep";

const PLUGIN_VERSION = "1.20.17";
export const TEMPLATES_API_URL = `https://regallery.team/core/wp-json/reacgcore/v3/templates?version=${PLUGIN_VERSION}`;
const CACHE_KEY = "reacg_templates_v3";

// Shown until the endpoint responds (or if it is unreachable) so the
// marketing copy never renders "0+ templates".
const FALLBACK_COUNTS = { all: 65, free: 20 };

interface TemplatesContextType {
  /** All templates, free ones first. */
  templates: TemplateDTO[];
  /** Templates grouped by gallery layout name (Grid, Mosaic, ...). */
  templatesByType: Record<string, TemplateDTO[]>;
  /** Formatted counts, e.g. "65+". */
  allTemplatesCount: string;
  freeTemplatesCount: string;
  isLoading: boolean;
  error: Error | null;
}

const TemplatesContext = createContext<TemplatesContextType | undefined>(
  undefined,
);

export const useTemplatesContext = () => {
  const context = useContext(TemplatesContext);
  if (!context) {
    throw new Error(
      "useTemplatesContext must be used within a TemplatesProvider",
    );
  }
  return context;
};

const isTemplate = (value: unknown): value is TemplateDTO =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as TemplateDTO).title === "string" &&
  typeof (value as TemplateDTO).preview_url === "string";

const parseTemplates = (value: unknown): TemplateDTO[] =>
  Array.isArray(value) ? value.filter(isTemplate) : [];

const readCache = (): TemplateDTO[] => {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    return raw ? parseTemplates(JSON.parse(raw)) : [];
  } catch {
    return [];
  }
};

const writeCache = (templates: TemplateDTO[]) => {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(templates));
  } catch {
    // Storage may be unavailable (private mode, quota); ignore.
  }
};

const sortFreeFirst = (templates: TemplateDTO[]) =>
  [...templates].sort((a, b) => Number(a.paid) - Number(b.paid));

export const TemplatesProvider = ({ children }: { children: ReactNode }) => {
  const [templates, setTemplates] = useState<TemplateDTO[]>(() =>
    sortFreeFirst(readCache()),
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(TEMPLATES_API_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Templates request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const parsed = parseTemplates(data);
        setTemplates(sortFreeFirst(parsed));
        writeCache(parsed);
        setError(null);
      })
      .catch((err: unknown) => {
        if (controller.signal.aborted) return;
        console.error("Failed to load templates:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const value = useMemo<TemplatesContextType>(() => {
    const templatesByType = templates.reduce<Record<string, TemplateDTO[]>>(
      (groups, template) => {
        if (!template.type) return groups;
        (groups[template.type] ||= []).push(template);
        return groups;
      },
      {},
    );
    const hasData = templates.length > 0;
    const freeCount = templates.filter((template) => !template.paid).length;

    return {
      templates,
      templatesByType,
      allTemplatesCount: formatCountByStep(
        hasData ? templates.length : FALLBACK_COUNTS.all,
      ),
      freeTemplatesCount: formatCountByStep(
        hasData ? freeCount : FALLBACK_COUNTS.free,
      ),
      isLoading,
      error,
    };
  }, [templates, isLoading, error]);

  return (
    <TemplatesContext.Provider value={value}>
      {children}
    </TemplatesContext.Provider>
  );
};
