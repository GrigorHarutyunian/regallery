type StepRoundingMode = "down" | "up" | "nearest";

interface IFormatCountByStepOptions {
  step?: number;
  suffix?: string;
  mode?: StepRoundingMode;
}

export const formatCountByStep = (
  count: number,
  options: IFormatCountByStepOptions = {},
): string => {
  const { step = 5, suffix = "+", mode = "down" } = options;
  const safeStep = Math.max(1, step);

  const divider = count / safeStep;

  const rounded =
    mode === "up"
      ? Math.ceil(divider)
      : mode === "nearest"
        ? Math.round(divider)
        : Math.floor(divider);

  return `${rounded * safeStep}${suffix}`;
};
