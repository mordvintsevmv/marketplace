import {FC} from "react";
import "./Header.scss"
import IconButton from "@mui/material/IconButton";
import {DarkMode} from "@mui/icons-material";
import {Stack} from "@mui/material";

interface HeaderProps {
    title?: string
}

const Header: FC<HeaderProps> = ({title = "Marketplace"}) => {
    return (
        <div className={"header"}>
            <h1>{title}</h1>

            <Stack direction={"row"}>
                <IconButton>
                    <DarkMode/>
                </IconButton>
            </Stack>

        </div>
    )
}

export default Header