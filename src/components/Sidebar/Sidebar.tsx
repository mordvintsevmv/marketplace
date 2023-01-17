import {FC} from "react";
import "./Sidebar.scss";
import logo from "../../img/logo.png";
import SideNav from "./SideNav/SideNav";
import {NavLink} from "react-router-dom";
import {useTypedSelector} from "../../hooks/typedHooks";

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = () => {

    const theme = useTypedSelector(state => state.themeReducer)

    return (
        <div className="sidebar-wrapper">

            <div className={`sidebar sidebar-${theme}`}>

                <div>
                    <NavLink to={"/"}>
                        <img src={logo} alt="logo" className="sidebar__logo"/>
                    </NavLink>
                </div>

                <SideNav/>
            </div>
        </div>
    )
}


export default Sidebar