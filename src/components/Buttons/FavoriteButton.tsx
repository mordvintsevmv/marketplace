import {Favorite} from "@mui/icons-material";
import React, {FC, useEffect, useState} from "react";
import IconButton from "@mui/material/IconButton";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/actions";

interface FavoriteButtonProps {
    productID: number
}

const FavoriteButton: FC<FavoriteButtonProps> = ({productID}) => {

    const [favFlag, setFavFlag] = useState(false)
    const {favorite} = useTypedSelector(state => state.productReducer)
    const {setFavourite} = useActions()

    const checkInFav = () => {
        if (favorite.includes(productID)){
            setFavFlag(true)
        } else{
            setFavFlag(false)
        }
    }

    const FavoriteHandler = () => {
        let favList = [...favorite]

        if (favFlag) {
            favList = favorite.filter(id => id !== productID)
        } else{
            favList.push(productID)
        }

        setFavourite(favList)
    }


    useEffect(() => {
        checkInFav();
    }, [favorite])

    return (
        <span onClick={FavoriteHandler}>
            <IconButton aria-label={"Add to favorite"} color={favFlag ? "secondary" : "primary"}>
                <Favorite/>
            </IconButton>
        </span>
    )
}

export default FavoriteButton