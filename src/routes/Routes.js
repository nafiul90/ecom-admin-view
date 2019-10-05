import { lazy } from 'react';
import { DASHBOARD_PATH, USER_PATH, PRODUCT_PATH, ADD_PRODUCT_PATH } from './Slugs';

const Dashboard = lazy(() => import('../components/pages/dashboard/Dashboard'));
const UserView = lazy(() => import('../components/pages/users/UserView'));
const Products = lazy(() => import('../components/pages/products/ProductView'));
const AddProduct = lazy(() => import('../components/pages/addProduct/AddProduct'))

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
        path: USER_PATH,
        exact: true,
        isPrivate: false,
        component: UserView
    },
    {
        path: ADD_PRODUCT_PATH,
        exact: true,
        isPrivate: false,
        component: AddProduct
    }
]

export default Routes;