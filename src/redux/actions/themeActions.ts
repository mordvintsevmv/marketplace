import {Dispatch} from "@reduxjs/toolkit";
import {themeSlice} from "../slices/themeSlice";

const {updateTheme} = themeSlice.actions

export const setTheme = (theme: String) => async (dispatch: Dispatch) => {
    localStorage.setItem("theme", theme.toString())

    const themeType = localStorage.getItem('theme')
    dispatch(updateTheme(themeType))
}
