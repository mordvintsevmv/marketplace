import {Dispatch} from "@reduxjs/toolkit";
import {updateTheme} from "../slices/themeSlice";

export const setTheme = (theme: String) => async (dispatch: Dispatch) => {
    localStorage.setItem("theme", theme.toString())

    const themeType = localStorage.getItem('theme')
    dispatch(updateTheme(themeType))
}
