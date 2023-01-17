import {FC, useEffect} from "react";
import Header from "../Header/Header";
import InProgress from "../InProgress/InProgress";
import "./Home.scss"

const Home: FC = () => {

    useEffect(() => {
        document.title = "Home"
    }, []);


    return (
        <div className={"home-page"}>
            <Header title={"Home"}/>

            <InProgress
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
                    Animations
                </li>

                <li>
                    Cart Component
                </li>

                <li>
                    More features with ag-grid
                </li>

                <li>
                    Design improvement
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

                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none"
                     className="css-1170n61">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                          fill="#007FFF"></path>
                </svg>
            </div>

        </div>
)
}

export default Home