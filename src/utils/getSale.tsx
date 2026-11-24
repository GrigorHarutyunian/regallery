import blackFridayDesktop from "../assets/sale/Black Friday.webp";
import blackFridayMobile from "../assets/sale/Black Friday Portrait.webp";
// Dynamic discount utility based on Pacific Time windows.

// PST is UTC-8 for these dates (standard time).
const PST_OFFSET_HOURS = 8; // Difference from UTC.

function pstToUtcTimestamp(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
) {
  // month is 1-based; Date.UTC month param is 0-based.
  const utcHour = hour + PST_OFFSET_HOURS; // shift to UTC
  return Date.UTC(year, month - 1, day, utcHour, minute, second);
}

// Boundaries converted to UTC timestamps.
// Black Friday & Cyber Monday 2026: Nov 27, 2026 00:00:00 PST to Dec 2, 2026 23:59:59 PST
const bfStartUtc = pstToUtcTimestamp(2026, 11, 27, 0, 0, 0);
const bfEndUtc = pstToUtcTimestamp(2026, 12, 2, 23, 59, 59);

export function getSaleKey(now: number = Date.now()): number | undefined {
  if (now >= bfStartUtc && now <= bfEndUtc) return 2;
  return undefined;
}

export function getSale(): {
  discount: number;
  couponCode?: string;
  label: string;
  message?: string | React.ReactNode;
  desktop: string;
  mobile: string;
  key: string;
  className?: string;
} | null {
  switch (getSaleKey()) {
    case 2:
      return {
        discount: 50,
        label: "Black Friday",
        message: (
          <>
            <a href="#pricing">
              <b>Black Friday Deal: 50% OFF</b> Re Gallery all Pro features!
              Discount applied automatically.
            </a>
          </>
        ),
        desktop: blackFridayDesktop,
        mobile: blackFridayMobile,
        key: "blackFridayBannerSeen_2026",
      };

    default:
      return null;
  }
}
