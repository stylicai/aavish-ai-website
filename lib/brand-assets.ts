/** Brand marks in /public — use these paths site-wide. */
export const brandAssets = {
  favicon: "/favicon.svg",
  logo: {
    /** Full wordmark on cream / light pages (navbar). */
    dark: "/logos/logo-dark.svg",
    /** Full wordmark on dark footer / dark sections. */
    light: "/logos/logo-white.svg",
    /** Full wordmark — white icon tile + white type (alternate on dark). */
    lightAlt: "/logos/logo-light-white.svg",
    /** 48×48 mark — orange tile (favicon-style). */
    iconOrange: "/logos/logo-orange.svg",
    /** 48×48 mark — white tile. */
    icon: "/logos/logo-icon.svg"
  },
  logoDimensions: {
    full: { width: 117, height: 48 },
    icon: { width: 48, height: 48 }
  }
} as const;
