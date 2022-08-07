import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import "@fontsource/dm-sans";
import { createTheme } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiButtonBase: {
            defaultProps: {
              disableRipple: true,
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                boxShadow: "none",
                textTransform: "none",
              },
            },
          },
        },
        typography: {
          fontFamily: "DM Sans",
        },
      })}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
