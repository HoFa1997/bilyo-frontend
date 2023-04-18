import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    yellow: ColorPartial;
    teal: ColorPartial;
    blue: ColorPartial;
    azure: ColorPartial;
    violet: ColorPartial;
    red: ColorPartial;
    green: ColorPartial;
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    yellow?: ColorPartial;
    teal?: ColorPartial;
    blue?: ColorPartial;
    azure?: ColorPartial;
    violet?: ColorPartial;
    red?: ColorPartial;
    green?: ColorPartial;
  }

  interface PaletteColor {
    yellow?: string;
    teal?: string;
    blue?: string;
    azure?: string;
    violet?: string;
    red?: string;
    green?: string;
  }

  interface SimplePaletteColorOptions {
    yellow?: string;
    teal?: string;
    blue?: string;
    azure?: string;
    violet?: string;
    red?: string;
    green?: string;
  }

  interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    display3: React.CSSProperties;
    headline1: React.CSSProperties;
    headline2: React.CSSProperties;
    headline3: React.CSSProperties;
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    title3: React.CSSProperties;
    title4: React.CSSProperties;
    label1: React.CSSProperties;
    label2: React.CSSProperties;
    label3: React.CSSProperties;
    body1: React.CSSProperties;
    body2: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    body5: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    display3?: React.CSSProperties;
    headline1?: React.CSSProperties;
    headline2?: React.CSSProperties;
    headline3?: React.CSSProperties;
    title1?: React.CSSProperties;
    title2?: React.CSSProperties;
    title3?: React.CSSProperties;
    title4?: React.CSSProperties;
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
    label3?: React.CSSProperties;
    body1?: React.CSSProperties;
    body2?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    body5?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    display3: true;
    headline1: true;
    headline2: true;
    headline3: true;
    title1: true;
    title2: true;
    title3: true;
    title4: true;
    label1: true;
    label2: true;
    label3: true;
    body1: true;
    body2: true;
    body3: true;
    body4: true;
    body5: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gold: true;
    negative: true;
    positive: true;
    warning: true;
    blue: true;
  }
}

export {};
