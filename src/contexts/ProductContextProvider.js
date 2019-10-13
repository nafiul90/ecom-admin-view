import React, { createContext, useState } from 'react';
import { GET_ALL_PRODUCT_API, POST_PRODUCT_API, UPDATE_PRODUCT_API } from "../helpers/apis";
import axios from "axios";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

    const [products, setProducts] = useState(null);
    const [product, setProduct] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const getAllProducts = () => {
        setLoading(true);
        axios.get(GET_ALL_PRODUCT_API)
            .then(res => {
                setProducts(res.data);
                setLoading(false)
                return true;
            })
            .catch(err => {
                // setErrorMsg(err.response ? err.response.data : err.message)
                setLoading(false)
                return false;
            });
    }

    const resetStatus = () => {
        console.log("reset");
        setErrorMsg(null);
        setSuccessMsg(null);
        setLoading(false);
    }

    const addProduct = (data) => {
        setLoading(true);
        const status = axios.post(POST_PRODUCT_API, data)
            .then(res => {
                setProducts(products ? [...products, res.data] : [res.data])
                setLoading(false)
                console.log("success");
                // setSuccessMsg("Product Added Successfully");
                return true;
            })
            .catch(err => {
                // setErrorMsg(err.response ? err.response.data : err.message);
                console.log("here-->", err)
                setLoading(false);
                return false;
            });
        return status;
    }

    const storeProduct = (product) => {
        setProduct(product);
    }

    const updateProduct = (data, id) => {
        setLoading(true);
        const status = axios.put(`${UPDATE_PRODUCT_API}/${id}`, data)
            .then(res => {
                let updatedProducts = products.map(e => { if (e.id === data.id) e = data; return e; });
                setProducts(updatedProducts);
                setLoading(false)
                // setSuccessMsg("Product Updated Successfully");
                return true;
            })
            .catch(err => {
                console.log("here", err)
                // setErrorMsg(err.response ? err.response.data : err.message);
                setLoading(false);
                return false;
            });

        return status;
    }


    return (
        <ProductContext.Provider
            value={{
                products,
                errorMsg,
                loading,
                successMsg,
                getAllProducts,
                product,
                storeProduct,
                updateProduct,
                addProduct,
                resetStatus
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;