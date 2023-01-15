import {FC} from "react";
import {NavLink} from "react-router-dom";
import home from "../../../img/home.svg"
import list from "../../../img/list.svg"
import table from "../../../img/table.svg"
import heart from "../../../img/heart.svg"

const SideNav: FC = () => {

    return (
        <div>
            <nav className="sidebar__nav sidebar-nav">
                <NavLink to={""}
                         className={({isActive}) => isActive ? 'sidebar-nav__active-link sidebar-nav__link' : 'sidebar-nav__link'}>
                    <img src={home} alt={"home"} className={"sidebar-nav__img"}/>
                </NavLink>

                <NavLink to={"list"}
                         className={({isActive}) => isActive ? 'sidebar-nav__active-link sidebar-nav__link' : 'sidebar-nav__link'}>
                    <img src={table} alt={"table"} className={"sidebar-nav__img"}/>
                </NavLink>

                <NavLink to={"products"}
                         className={({isActive}) => isActive ? 'sidebar-nav__active-link sidebar-nav__link' : 'sidebar-nav__link'}>
                    <img src={list} alt={"list"} className={"sidebar-nav__img"}/>
                </NavLink>

                <NavLink to={"favorite"}
                         className={({isActive}) => isActive ? 'sidebar-nav__active-link sidebar-nav__link' : 'sidebar-nav__link'}>
                    <img src={heart} alt={"favorite"} className={"sidebar-nav__img"}/>
                </NavLink>

            </nav>
        </div>
    )
}

export default SideNav