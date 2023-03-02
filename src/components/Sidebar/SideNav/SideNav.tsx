import {FC} from "react";
import {NavLink, useLocation} from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import TableChartIcon from '@mui/icons-material/TableChart';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CategoryIcon from '@mui/icons-material/Category';
import {IconButton} from "@mui/material";

const SideNav: FC = () => {

    const location = useLocation();

    return (
        <div>
            <nav className={`sidebar__nav sidebar-nav`}>
                <NavLink to={"/"}>
                    <IconButton color={location.pathname === "/" ? 'secondary' : 'default'}>
                        <HomeIcon/>
                    </IconButton>
                </NavLink>

                <NavLink to={"/list"}>
                    <IconButton color={location.pathname.includes("/list") ? 'secondary' : 'default'}>
                        <TableChartIcon/>
                    </IconButton>
                </NavLink>

                <NavLink to={"/products"}>
                    <IconButton color={location.pathname.includes("/products") ? 'secondary' : 'default'}>
                        <FormatListBulletedIcon/>
                    </IconButton>
                </NavLink>

                <NavLink to={"/categories"}>
                    <IconButton color={location.pathname.includes("/categories") ? 'secondary' : 'default'}>
                        <CategoryIcon/>
                    </IconButton>
                </NavLink>

            </nav>
        </div>
    )
}

export default SideNav