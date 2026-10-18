import { useTemplatesContext } from "../../contexts/TemplatesContext";

interface TemplatesCountProps {
  /** "all" (default) renders the total template count, "free" only the free ones. */
  type?: "all" | "free";
}

/**
 * Renders the formatted template count ("65+") loaded from the templates
 * endpoint. Usable inside static data objects that cannot call hooks.
 */
const TemplatesCount: React.FC<TemplatesCountProps> = ({ type = "all" }) => {
  const { allTemplatesCount, freeTemplatesCount } = useTemplatesContext();

  return <>{type === "free" ? freeTemplatesCount : allTemplatesCount}</>;
};

export default TemplatesCount;
