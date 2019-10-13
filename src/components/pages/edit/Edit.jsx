import React, { useContext } from "react";
import Form from "../../common/form/Form";
import PageWrapper from '../../common/PageWrapper';
import LoadingSuspense from "../../common/LoadingSuspense";
import { createFormWithData } from "../../common/form/Form";
import { PageHeader } from 'antd';
import { Redirect } from "react-router-dom";
import { PRODUCT_PATH, PRODUCT_INFO_PATH, EDIT_PATH } from "../../../routes/Slugs"
import _ from "lodash";

import { ProductContext } from "../../../contexts/ProductContextProvider";


const routes = [
    {
        path: `${PRODUCT_INFO_PATH}`,
        breadcrumbName: 'Product Information',
    },
    {
        path: EDIT_PATH,
        breadcrumbName: 'Edit Information',
    }
]

export default (props) => {

    const productContext = useContext(ProductContext);
    const { loading } = productContext;

    const data = props.location.data;
    const formData = props.location.formData;
    const header = props.location.header;

    const pageHeader = data && <PageHeader title={header} subTitle={`Id: ${data._id}`}
        breadcrumb={{ routes }}
    />

    return (
        data ?
            <PageWrapper pageHeader={pageHeader}>
                {props.location.updated && <Redirect to={PRODUCT_INFO_PATH} />}
                {loading ? <LoadingSuspense /> :
                    <Form
                        formData={createFormWithData(formData, data)}
                        submitMsg={`UPDATE`}
                        resetMsg="RESET"
                        submitButtonType="primary"
                        onSubmit={props.location.onSubmit}

                        root={true}
                    />
                }

            </PageWrapper> : <Redirect to={PRODUCT_INFO_PATH} />
    )
}

