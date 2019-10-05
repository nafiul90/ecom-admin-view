import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppContextProvider from './contexts/AppContextProvider';
import AuthContextProvider from './contexts/AuthContextProvider';
import ProductContextProvider from './contexts/ProductContextProvider';

/* SCSS */
import 'antd/dist/antd.css';
import './assets/scss/style.scss';

ReactDOM.render(
    <AuthContextProvider>
        <AppContextProvider>
            <ProductContextProvider>
                <App />
            </ProductContextProvider>
        </AppContextProvider>
    </AuthContextProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
