import { lazy } from 'react';
import { DASHBOARD_PATH, USER_PATH } from './Slugs';

const Dashboard = lazy(() => import('../components/pages/dashboard/Dashboard'));
const UserView = lazy(() => import('../components/pages/users/UserView'));

const Routes = [
    {
        path: DASHBOARD_PATH,
        exact: true,
        isPrivate: false,
        component: Dashboard
    },
    {
        path: USER_PATH,
        exact: true,
        isPrivate: false,
        component: UserView
    }
]

export default Routes;