import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  purple: {
    500: "#5F00D9",
  },
  fonts: {
    heading: `Ubuntu`,
    body: `Ubuntu`,
  },
  styles: {
    global: {
      body: {
        bg: "black.5",
      },
    },
  },
  colors: {
    p: {
      purple: "#5F00D9",
      black: "#171717",
    },
    black: {
      5: "#F3F3F7",
      10: "#EEEEF4",
      15: "#D8DDE2",
      20: "#BABAC4",
      25: "#797E82",
      30: "#535D66",
    },
  },
  textStyles: {
    h1: {
      fontSize: {
        base: "18px",
        md: "24px",
      },
      color: "p.black",
      fontWeight: "medium",
    },
    h2: {
      fontSize: {
        base: "16px",
        md: "22px",
      },
      color: "p.black",
      fontWeight: "medium",
    },
    h3: {
      fontSize: {
        base: "14px",
        md: "16px",
      },
      color: "p.black",
    },
    h4: {
      fontSize: {
        base: "12px",
        md: "14px",
      },
      color: "p.black",
      fontWeight: "medium",
    },
    h5: {
      fontSize: {
        base: "14px",
        md: "14px",
      },
      color: "black.30",
    },
    h6: {
      fontSize: {
        base: "10px",
        md: "12px",
      },
      color: "black.25",
    },
    h7: {
      fontSize: {
        base: "28px",
        md: "32px",
      },
      color: "p.black",
      fontWeight: "bold",
    },
    h8: {
      fontSize: {
        base: "20px",
        md: "22px",
      },
      color: "p.black",
      fontWeight: "500",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "10px",
        lineHeight: "18px",
        h: "38px",
        w: "80px",
      },
      variants: {
        "form-btn": {
          w: "100%",
          fontSize: "14px",
          fontWeight: "500",
          h: "38px",
          color: "white",
          bg: "p.purple",
          _hover: {
            color: "p.purple",
            bg: "white",
            border: "2px",
            bg: "transparent",
            borderColor: "p.purple",
          },
        },
        "form-btn-outline": {
          w: "100%",
          fontSize: "14px",
          fontWeight: "500",
          h: "38px",
          color: "p.purple",
          bg: "white",
          border: "2px",
          bg: "transparent",
          borderColor: "p.purple",
          _hover: {
            bg: "p.purple",
            color: "white",
          },
        },
      },
    },
    Text: {
      variants: {
        "form-label": {
          textStyle: "h6",
          color: "p.black",
          fontWeight: "500",
          lineHeight: "14px",
        },
      },
    },
    Input: {
      baseStyle: {
        h: "50px",
      },
      variants: {
        outline: {
          field: {
            h: "38px",
            w: "100%",
            py: "10px",
            px: "12px",
            _focus: {
              boxShadow: "0 0 0 1px #5F00D9",
            },
          },
        },
      },
    },
    Textarea: {
      variants: {
        outline: {
          _focus: {
            boxShadow: "0 0 0 1px #5F00D9",
          },
        },
      },
    },
    InputForm: {
      baseStyle: {
        fontSize: "14px",
        w: "100%",
        h: "38px",
        py: "10px",
        px: "12px",
      },
    },
  },
});
