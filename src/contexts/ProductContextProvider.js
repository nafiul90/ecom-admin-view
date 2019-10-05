import React, { createContext, useState } from 'react';
import axios from "axios";

export const ProductContext = createContext();

const getAllProductsApi = "http://localhost:8080/api/v1/products";

const ProductContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    const getAllProducts = () => {
        console.log("here");
        axios.get(getAllProductsApi)
            .then(res => setProducts(res.data))
            .catch(err => setErrorMsg(err.response.data));
    }


    return (
        <ProductContext.Provider
            value={{
                products,
                errorMsg,
                getAllProducts
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;