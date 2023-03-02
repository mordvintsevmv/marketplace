import {FC, useEffect} from "react";
import Header from "../Header/Header";
import WarningBanner from "../WarningBanner/WarningBanner";
import "./Home.scss"

const Home: FC = () => {

    useEffect(() => {
        document.title = "Home"
    }, []);


    return (
        <div className={"home-page"}>
            <Header title={"Home"}/>

            <WarningBanner
                title={"Work In Progress"}
                description={"The application is at the stage of active development of the main functions. Some functions may not work correctly or cause errors."}/>

            <h2>
                Currently developed:
            </h2>

            <ul>
                <li>
                    Main Components (Product Card, Pages, etc)
                </li>

                <li>
                    Redux store (Redux toolkit) with reducers for storing the application state
                </li>

                <li>
                    Saving cart and favorites in localStorage
                </li>

                <li>
                    Dark and Light Mode
                </li>

                <li>
                    Adaptivity
                </li>
            </ul>

            <h2>
                In development:
            </h2>

            <ul>
                <li>
                    More features with ag-grid
                </li>

                <li>
                    Design improvement and etc.
                </li>
            </ul>

            <h2>Used technologies:</h2>
            <div className="home-page-tech">
                <img className="home-page-tech__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png?20170517184425"
                      alt="html"/>

                <img className="home-page-tech__img" src="https://1000logos.net/wp-content/uploads/2020/08/Sass-Logo-1024x640.png"
                      alt="scss"/>

                <img className="home-page-tech__img" src="https://www.svgrepo.com/show/303600/typescript-logo.svg"
                      alt="typescript"/>

                <img className="home-page-tech__img" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                      alt="react"/>

                <img className="home-page-tech__img" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png"
                     alt="redux"/>

                <img className="home-page-tech__img" src="https://blog.ag-grid.com/content/images/2021/02/ag-grid-old-6.png"
                     alt="ag-grid"/>

                <img className="home-page-tech__img" src="https://mui.com/static/logo.png" alt="mui"/>
            </div>

        </div>
)
}

export default Home