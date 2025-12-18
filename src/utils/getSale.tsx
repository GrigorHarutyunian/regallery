// import blackFridayEarlyAccessDesktop from "../assets/sale/Black Friday Early Access.webp";
// import blackFridayEarlyAccessMobile from "../assets/sale/Black Friday Early Access Portrait.webp";
// import blackFridayDesktop from "../assets/sale/Black Friday.webp";
// import blackFridayMobile from "../assets/sale/Black Friday Portrait.webp";
// import cyberMondayDesktop from "../assets/sale/Cyber Monday.webp";
// import cyberMondayMobile from "../assets/sale/Cyber Monday Portrait.webp";
import christmasSale1Desktop from "../assets/sale/Christmas Sale1.webp";
import christmasSale1Mobile from "../assets/sale/Christmas Sale1 Portrait.webp";
import christmasSale2Desktop from "../assets/sale/Christmas Sale2.webp";
import christmasSale2Mobile from "../assets/sale/Christmas Sale2 Portrait.webp";
// Dynamic discount utility based on Pacific Time windows.

// PST is UTC-8 for these dates (standard time).
const PST_OFFSET_HOURS = 8; // Difference from UTC.

function pstToUtcTimestamp(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number
) {
  // month is 1-based; Date.UTC month param is 0-based.
  const utcHour = hour + PST_OFFSET_HOURS; // shift to UTC
  return Date.UTC(year, month - 1, day, utcHour, minute, second);
}

// Boundaries converted to UTC timestamps.
const bfPhase1StartUtc = pstToUtcTimestamp(2025, 11, 16, 12, 0, 0);
const bfPhase1EndUtc = pstToUtcTimestamp(2025, 11, 27, 11, 59, 59);

const bfPhase2StartUtc = pstToUtcTimestamp(2025, 11, 27, 12, 0, 0);
const bfPhase2EndUtc = pstToUtcTimestamp(2025, 11, 30, 23, 59, 59);

const bfPhase3StartUtc = pstToUtcTimestamp(2025, 12, 1, 0, 0, 0);
const bfPhase3EndUtc = pstToUtcTimestamp(2025, 12, 7, 23, 59, 59);

const csPhase1StartUtc = pstToUtcTimestamp(2025, 12, 19, 0, 0, 0);
const csPhase1EndUtc = pstToUtcTimestamp(2025, 12, 23, 22, 59, 59);

const csPhase2StartUtc = pstToUtcTimestamp(2025, 12, 23, 0, 0, 0);
const csPhase2EndUtc = pstToUtcTimestamp(2025, 12, 30, 23, 59, 59);

export function getSaleKey(now: number = Date.now()): number | undefined {
  if (now >= bfPhase1StartUtc && now <= bfPhase1EndUtc) return 1;
  if (now >= bfPhase2StartUtc && now <= bfPhase2EndUtc) return 2;
  if (now >= bfPhase3StartUtc && now <= bfPhase3EndUtc) return 3;
  if (now >= csPhase1StartUtc && now <= csPhase1EndUtc) return 4;
  if (now >= csPhase2StartUtc && now <= csPhase2EndUtc) return 5;
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
} | null {
  switch (getSaleKey()) {
    // case 1:
    //   return {
    //     discount: 20,
    //     label: "Black Friday Early Access",
    //     message: (
    //       <>
    //         <a href="#pricing">
    //           <b>20% OFF</b> Re Gallery all Pro features - Black Friday Early
    //           Access
    //         </a>
    //       </>
    //     ),
    //     desktop: blackFridayEarlyAccessDesktop,
    //     mobile: blackFridayEarlyAccessMobile,
    //     key: "blackFridayEarlyAccessBannerSeen",
    //   };
    // case 2:
    //   return {
    //     discount: 50,
    //     label: "Black Friday",
    //     message: (
    //       <>
    //         <a href="#pricing">
    //           <b>50% OFF</b> Re Gallery all Pro features - Black Friday
    //         </a>
    //       </>
    //     ),
    //     desktop: blackFridayDesktop,
    //     mobile: blackFridayMobile,
    //     key: "blackFridayBannerSeen",
    //   };
    // case 3:
    //   return {
    //     discount: 30,
    //     label: "Cyber Monday",
    //     message: (
    //       <>
    //         <a href="#pricing">
    //           <b>30% OFF</b> Re Gallery all Pro features - Cyber Monday
    //         </a>
    //       </>
    //     ),
    //     desktop: cyberMondayDesktop,
    //     mobile: cyberMondayMobile,
    //     key: "cyberMondayBannerSeen",
    //   };
    case 4:
      return {
        discount: 50,
        couponCode: "CHRISTMAS25",
        label: "Christmas Sale",
        message: (
          <>
            Christmas Sale.{" "}
            <a href="#pricing">
              <b>Get 50% off</b>
            </a>{" "}
            with Coupon Code: CHRISTMAS25
          </>
        ),
        desktop: christmasSale1Desktop,
        mobile: christmasSale1Mobile,
        key: "christmasSale1BannerSeen",
      };
    case 5:
      return {
        discount: 50,
        couponCode: "CHRISTMAS25",
        label: "Christmas Sale",
        message: (
          <>
            Christmas Sale.{" "}
            <a href="#pricing">
              <b>Get 50% off</b>
            </a>{" "}
            with Coupon Code: CHRISTMAS25
          </>
        ),
        desktop: christmasSale2Desktop,
        mobile: christmasSale2Mobile,
        key: "christmasSale2BannerSeen",
      };

    default:
      return null;
  }
}
