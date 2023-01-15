import {FC} from "react";
import "./Sidebar.scss";
import logo from "../../img/logo.png";
import SideNav from "./SideNav/SideNav";
import {NavLink} from "react-router-dom";

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = () => {
    return (
        <div className="sidebar-wrapper">

            <div className="sidebar">

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