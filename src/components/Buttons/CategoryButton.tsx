import {FC} from "react";
import {Button} from "@mui/material";
import {Woman} from "@mui/icons-material";
import {NavLink} from "react-router-dom";

interface CategoryButtonProps {
    category: string
}

const CategoryButton: FC<CategoryButtonProps> = ({category}) => {
    return (
        <span>
            <NavLink to={"/categories/"+category}>
                <Button startIcon={<Woman/>}>
                    {category}
                </Button>
            </NavLink>
        </span>
    )
}

export default CategoryButton