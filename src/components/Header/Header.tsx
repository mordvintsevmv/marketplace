import {FC} from "react";
import "./Header.scss"
import IconButton from "@mui/material/IconButton";
import {DarkMode, LightMode} from "@mui/icons-material";
import {Stack} from "@mui/material";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/actions";

interface HeaderProps {
    title?: string
}

const Header: FC<HeaderProps> = ({title = "Marketplace"}) => {

    const theme = useTypedSelector(state => state.themeReducer)
    const {setTheme} = useActions()

    const changeThemeHandler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <div className={"header"}>
            <h1>{title}</h1>

            <div className={"header-buttons"}>
                <Stack direction={"row"}>

                    <span onClick={changeThemeHandler}>
                        <IconButton>
                            {theme === "dark" ? <LightMode  color={"info"}/> : <DarkMode />}
                        </IconButton>
                    </span>
                </Stack>
            </div>


        </div>
    )
}

export default Header