import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

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
      fontWeight: "bold",
    },
    h2: {
      fontSize: {
        base: "16px",
        md: "22px",
      },
      color: "p.black",
      fontWeight: "bold",
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
      fontWeight:"bold"
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
    h7:{
      fontSize: {
        base: "28px",
        md: "32px",
      },
      color: "p.black",
      fontWeight:"bold"
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "10px",
        h: "38px",
        w: "80px",
        
      },
    },
    Input:{
      variants:{
        outline:{
          field:{
            _focus:{
              boxShadow:"0 0 0 1px #5F00D9",
            },
          },
        },
      }
    },
    Textarea:{
      variants:{
        outline:{
            _focus:{
              boxShadow:"0 0 0 1px #5F00D9",
            },
          },
      }
    },
  },
});
