// Dynamic discount utility based on Pacific Time windows.
// Schedule (PST):
// - 20% until Nov 27 2025 23:59:59
// - 40% Nov 28 2025 00:00:00 through Nov 30 2025 23:59:59
// - 30% Dec 1 2025 00:00:00 through Dec 7 2025 23:59:59
// After these periods: no discount.

// PST is UTC-8 for these dates (standard time).
const PST_OFFSET_HOURS = 8; // Difference from UTC.

function pstToUtcTimestamp(year: number, month: number, day: number, hour: number, minute: number, second: number) {
  // month is 1-based; Date.UTC month param is 0-based.
  const utcHour = hour + PST_OFFSET_HOURS; // shift to UTC
  return Date.UTC(year, month - 1, day, utcHour, minute, second);
}

// Boundaries converted to UTC timestamps.
const phase1StartUtc = pstToUtcTimestamp(2025, 11, 17, 0, 0, 0);
const phase1EndUtc = pstToUtcTimestamp(2025, 11, 27, 23, 59, 59);
const phase2StartUtc = pstToUtcTimestamp(2025, 11, 28, 0, 0, 0);
const phase2EndUtc = pstToUtcTimestamp(2025, 11, 30, 23, 59, 59);
const phase3StartUtc = pstToUtcTimestamp(2025, 12, 1, 0, 0, 0);
const phase3EndUtc = pstToUtcTimestamp(2025, 12, 7, 23, 59, 59);

export function getCurrentDiscount(now: number = Date.now()): number | undefined {
  if (now >= phase1StartUtc && now <= phase1EndUtc) return 20;
  if (now >= phase2StartUtc && now <= phase2EndUtc) return 40;
  if (now >= phase3StartUtc && now <= phase3EndUtc) return 30;
  return undefined;
}

export function getDiscountLabel(): string | undefined {
  const v = getCurrentDiscount();
  if (v === 20) return "Black Friday Early Access";
  if (v === 40) return "Black Friday";
  if (v === 30) return "Cyber Monday";
  return undefined;
}
