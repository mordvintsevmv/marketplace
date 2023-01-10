import {FC, useEffect} from "react";
import Header from "../Header/Header";

const Home: FC = () => {

    useEffect(() => {
        document.title = "Home"
    }, []);


    return(
        <div className={"content"}>
            <Header title={"Home"}/>
        </div>
    )
}

export default Home