import {Dispatch} from "@reduxjs/toolkit";
import {themeSlice} from "../slices/themeSlice";

const {set} = themeSlice.actions

export const setTheme = (theme: String) => async (dispatch: Dispatch) => {
    dispatch(set(theme))
}
