import {FC} from "react";
import "./Header.scss"

interface HeaderProps {
    title?: string
}
const Header: FC<HeaderProps> = ({title= "Marketplace"}) => {
    return(
        <div className={"header"}>
            <h1>{title}</h1>
        </div>
    )
}

export default Header