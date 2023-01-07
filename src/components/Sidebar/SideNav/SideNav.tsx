import {FC} from "react";
import {NavLink} from "react-router-dom";
import home from "../../../img/light_theme/home.svg"
import list from "../../../img/light_theme/list.svg"

const SideNav: FC = () => {

    return (
        <div>
            <nav className="sidebar__nav sidebar-nav">
                <NavLink to={""} className={({isActive}) => isActive ? 'sidebar-nav__active-link sidebar-nav__link' : 'sidebar-nav__link'}><img src={home}
                                                                                                        alt={"home"} className={"sidebar-nav__img"}/></NavLink>
                <NavLink to={"list"} className={({isActive}) => isActive ? 'sidebar-nav__active-link sidebar-nav__link' : 'sidebar-nav__link'}><img src={list}
                                                                                                            alt={"list"} className={"sidebar-nav__img"}/></NavLink>
            </nav>
        </div>
    )
}

export default SideNav