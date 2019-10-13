import { lazy } from 'react';
import { DASHBOARD_PATH, USER_PATH, PRODUCT_PATH, ADD_PRODUCT_PATH, PRODUCT_INFO_PATH, EDIT_PATH } from './Slugs';

const Dashboard = lazy(() => import('../components/pages/dashboard/Dashboard'));
const UserView = lazy(() => import('../components/pages/users/UserView'));
const Products = lazy(() => import('../components/pages/products/ProductView'));
const AddProduct = lazy(() => import('../components/pages/addProduct/AddProduct'));
const ProductInfoView = lazy(() => import('../components/pages/productInfo/ProductInfoView'));
const Edit = lazy(() => import('../components/pages/edit/Edit'))

const Routes = [
    {
        path: DASHBOARD_PATH,
        exact: true,
        isPrivate: false,
        component: Dashboard
    },
    {
        path: PRODUCT_PATH,
        exact: true,
        isPrivate: false,
        component: Products
    },
    {
        path: PRODUCT_INFO_PATH,
        exact: true,
        isPrivate: false,
        component: ProductInfoView
    },
    {
        path: ADD_PRODUCT_PATH,
        exact: true,
        isPrivate: false,
        component: AddProduct
    },
    {
        path: EDIT_PATH,
        exact: true,
        isPrivate: false,
        component: Edit
    },
    {
        path: USER_PATH,
        exact: true,
        isPrivate: false,
        component: UserView
    },
]

export default Routes;