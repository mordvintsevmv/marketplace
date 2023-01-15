import {Favorite} from "@mui/icons-material";
import React, {FC, useCallback, useEffect, useState} from "react";
import IconButton from "@mui/material/IconButton";

interface FavoriteButtonProps {
    productID: number
}

const FavoriteButton: FC<FavoriteButtonProps> = ({productID}) => {

    const [favFlag, setFavFlag] = useState(false)

    const checkInFav = useCallback(
        () => {
            let fav = localStorage.getItem("favorite")
            if (fav !== null) {
                let favArr = fav.split(",");
                if (favArr.includes(String(productID))) {
                    setFavFlag(true)
                } else {
                    setFavFlag(false)
                }
            }
        }, []
    )

    const FavoriteHandler = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            let fav = localStorage.getItem("favorite")

            if (fav !== null) {
                let favArr = fav.split(",");

                if (favArr.includes(String(productID))) {
                    favArr = favArr.filter((id) => {
                        return id !== String(productID)
                    })
                    localStorage.setItem("favorite", favArr.toString())
                } else {
                    localStorage.setItem("favorite", String(fav + "," + String(productID)))
                }
            } else {
                localStorage.setItem("favorite", String(fav + "," + String(productID)))
            }

            checkInFav();

        }, []
    )

    useEffect(() => {
        checkInFav();
    }, [])

    return (
        <span onClick={FavoriteHandler}>
            <IconButton aria-label={"Add to favorite"} color={favFlag ? "secondary" : "primary"}>
                <Favorite/>
            </IconButton>
        </span>
    )
}

export default FavoriteButton