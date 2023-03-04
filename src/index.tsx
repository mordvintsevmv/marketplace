import React from 'react';
import ReactDOM from 'react-dom/client';
import './null.css';
import "./fonts.scss"
import App from './components/App/App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
