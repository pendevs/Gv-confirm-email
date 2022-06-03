/* eslint-disable quote-props */
import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: Palette["primary"];
    whiteWarm: Palette["primary"];
    taupe: Palette["primary"];
    granite: Palette["primary"];
    mint: Palette["primary"];
  }
  interface PaletteOptions {
    white: PaletteOptions["primary"];
    whiteWarm: PaletteOptions["primary"];
    taupe: PaletteOptions["primary"];
    granite: PaletteOptions["primary"];
    mint: PaletteOptions["primary"];
  }
}

export const defaultTheme: Theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "-apple-system",
      "BlinkMacSystemFont",
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#ffc20d",
    },
    secondary: {
      main: "#FAF6F4",
    },
    info: {
      main: "#7386e6",
    },
    error: {
      main: "#FF704D",
      light: "#FF704D29",
    },
    success: {
      main: "#0F9997",
    },
    white: {
      main: "#ffffff",
    },
    whiteWarm: {
      main: "#FAF6F4",
    },
    taupe: {
      main: "#D9C7B8",
    },
    granite: {
      main: "#6F6661",
    },
    mint: {
      main: "#9AD9B7",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "32px",
          fontWeight: 500,
          padding: "8px 24px",
        },
      },
      variants: [
        {
          props: {
            size: "small",
          },
          style: {
            padding: "5px 12px",
            fontSize: "12px",
            minWidth: "auto",
          },
        },
        {
          props: {
            color: "error",
          },
          style: {
            color: "white",
          },
        },
        {
          props: {
            variant: "outlined",
            color: "primary",
          },
          style: {
            border: "1px solid #ccc",
            color: "#000",
          },
        },
      ],
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          transform: "translate(0, -1.5px) scale(1)",
          fontSize: "13px",
          "&.Mui-focused": {
            color: "rgba(0, 0, 0, 0.6)",
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        variant: "standard",
      },
      styleOverrides: {
        root: {
          marginBottom: "1.2rem",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: "2px",
          marginBottom: "1rem",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "13px",
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});

/**
 * Typography
 */
defaultTheme.typography.h1 = {
  fontSize: "32px",
  fontWeight: 400,
};

defaultTheme.typography.h2 = {
  fontSize: "22px",
  fontWeight: 400,
};

defaultTheme.typography.h3 = {
  fontSize: "16px",
  fontWeight: 800,
};

defaultTheme.typography.h4 = {
  fontSize: "13px",
  fontWeight: 800,
};

defaultTheme.typography.subtitle1 = {
  fontSize: "13px",
};

defaultTheme.typography.body1 = {
  fontSize: "13px",
  lineHeight: "1.65",
};
