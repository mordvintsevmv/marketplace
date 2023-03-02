import {ThemeOptions} from "@mui/material/styles";

export const lightTheme: ThemeOptions = {
    typography: {
        fontFamily: 'Montserrat, Arial',
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
    },
    palette: {
        mode: "dark",
        secondary: {
            main: '#EA8585',
            contrastText: '#fff',
        }
    },
};