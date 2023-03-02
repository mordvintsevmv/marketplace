import {ThemeOptions} from "@mui/material/styles";

export const lightTheme: ThemeOptions = {
    typography: {
        fontFamily: 'Montserrat, Arial',
        fontSize: 14,
        h1: {
            fontSize: "26px",
            fontWeight: "500",
            lineHeight: "38px",
            color: "rgba(50, 50, 50, .9)"
        },
        h2: {
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "36px",
            color: "rgba(50, 50, 50, .9)"
        },
        h3: {
            fontSize: "22px",
            fontWeight: "500",
            lineHeight: "33px",
            color: "rgba(50, 50, 50, .9)"
        },
        h4: {
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "30px",
            color: "rgba(50, 50, 50, .9)"
        },
        h5: {
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "30px",
            color: "rgba(50, 50, 50, .55)"
        },
        h6: {
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
            color: "rgba(50, 50, 50, .55)"
        },
    },
    palette: {
        mode: "light",
        secondary: {
            main: '#EA6185',
            contrastText: '#fff',
        }
    },
};
export const darkTheme: ThemeOptions = {
    typography: {
        fontFamily: 'Montserrat, Arial',
        h1: {
            fontSize: "26px",
            fontWeight: "500",
            lineHeight: "38px",
            color: "rgba(255, 255, 255, .9)"
        },
        h2: {
            fontSize: "24px",
            fontWeight: "500",
            lineHeight: "36px",
            color: "rgba(255, 255, 255, .9)"
        },
        h3: {
            fontSize: "22px",
            fontWeight: "500",
            lineHeight: "33px",
            color: "rgba(255, 255, 255, .9)"
        },
        h4: {
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "30px",
            color: "rgba(255, 255, 255, .9)"
        },
        h5: {
            fontSize: "18px",
            fontWeight: "500",
            lineHeight: "30px",
            color: "rgba(255, 255, 255, .55)"
        },
        h6: {
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
            color: "rgba(255, 255, 255, .9)"
        },
    },
    palette: {
        mode: "dark",
        secondary: {
            main: '#EA8585',
            contrastText: '#fff',
        }
    },
};