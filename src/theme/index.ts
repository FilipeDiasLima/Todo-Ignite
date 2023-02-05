import { extendTheme } from "native-base";

export const Theme = extendTheme({
  colors: {
    purple: {
      700: "#5E60CE",
      500: "#8284FA",
    },
    blue: {
      800: "#1E6F9F",
      500: "#4EA8DE",
    },
    gray: {
      700: "#0D0D0D",
      600: "#1A1A1A",
      500: "#262626",
      400: "#333333",
      300: "#808080",
      200: "#D9D9D9",
      100: "#F2F2F2",
    },
    white: "#FFFFFF",
    red: {
      500: "#E25858",
    },
  },
  fonts: {
    heading: "Inter_700Bold",
    body: "Inter_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
});
