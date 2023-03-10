import {FC} from "react";
import "./Header.scss"
import IconButton from "@mui/material/IconButton";
import {DarkMode, LightMode} from "@mui/icons-material";
import {Stack} from "@mui/material";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/actions";
import {NavLink, useLocation} from "react-router-dom";
import Badge from '@mui/material/Badge';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

interface HeaderProps {
    title?: string
}

const Header: FC<HeaderProps> = ({title = "Marketplace"}) => {

    const theme = useTypedSelector(state => state.themeReducer)
    const {cart, favorite} = useTypedSelector(state => state.productReducer)
    const {setTheme} = useActions()
    const location = useLocation()

    const changeThemeHandler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <div className={`header header-${theme}`}>
            <h1>{title}</h1>

            <div className={"header-buttons"}>
                <Stack direction={"row"} spacing={2}>


                    <NavLink to={"/cart"}>
                        <IconButton>
                            <Badge badgeContent={cart.length} color="secondary">
                                {location.pathname.includes("/cart") ? <ShoppingBasketIcon color={'secondary'}/> :
                                    <ShoppingBasketIcon/>}
                            </Badge>
                        </IconButton>
                    </NavLink>

                    <NavLink to={"/favorite"}>
                        <IconButton>
                            <Badge badgeContent={favorite.length} color="secondary">
                                {location.pathname.includes("/favorite") ? <FavoriteIcon color={'secondary'}/> :
                                    <FavoriteIcon/>}
                            </Badge>
                        </IconButton>
                    </NavLink>

                    <IconButton onClick={changeThemeHandler}>
                        {theme === "dark" ? <LightMode/> : <DarkMode/>}
                    </IconButton>

                </Stack>
            </div>


        </div>
    )
}

export default Header