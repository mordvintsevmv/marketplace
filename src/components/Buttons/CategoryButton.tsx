import {FC} from "react";
import {Button} from "@mui/material";
import {Category, Diamond, Female, Male, Power} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

interface CategoryButtonProps {
    category: string
}

const CategoryButton: FC<CategoryButtonProps> = ({category}) => {

    let icon = <Category/>
    if (category === "women's clothing") {
        icon = <Female/>
    } else if (category === "men's clothing") {
        icon = <Male/>
    } else if (category === "jewelery") {
        icon = <Diamond/>
    } else if (category === "electronics") {
        icon = <Power/>
    }
    return (
        <span>
            <NavLink to={"/categories/" + category}>
                <Button startIcon={icon} size={"small"}>
                    {category}
                </Button>
            </NavLink>
        </span>
    )
}

export default CategoryButton