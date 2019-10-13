import React, { useState, useContext, useEffect } from "react";
import Form from "../../common/form/Form";
import { productFormData } from "./productFormData";
import PageWrapper from '../../common/PageWrapper';
import LoadingSuspense from "../../common/LoadingSuspense";
import confirmationModal from "../../common/ConfirmationModal";
import { createFormWithData } from "../../common/form/Form";
import { PageHeader } from 'antd';

import { ProductContext } from "../../../contexts/ProductContextProvider";

const pageHeader = <PageHeader title="Add Products" subTitle="Add your product carefully." />

export default () => {

    const productContext = useContext(ProductContext);
    const { loading, successMsg, errorMsg } = productContext;



    const onSubmitHandle = (data, root) => {

        //if the submit action came from nested form then terminate this function.
        if (!root) return;

        localStorage.setItem("product", JSON.stringify(data));
        productContext.addProduct(data) ? confirmationModal("Product saved successfully !", "success")
            : confirmationModal("Can not save product !", "error")
        productContext.resetStatus();
    }

    const data = JSON.parse(localStorage.getItem("product"));

    return (
        <PageWrapper pageHeader={pageHeader}>

            {loading ? <LoadingSuspense /> :
                <Form
                    formData={createFormWithData(productFormData, data)}
                    submitMsg="ADD PRODUCT"
                    resetMsg="RESET FORM"
                    submitButtonType="primary"
                    onSubmit={onSubmitHandle}

                    root={true}
                />
            }

        </PageWrapper>
    )
}

