import React, { useState, lazy, Suspense } from 'react';
import { Layout } from 'antd';
import LoadingSuspense from '../common/LoadingSuspense';
import CustomFooter from './Footer';
import NavHeader from './header/NavHeader';
import { Route, Redirect, Switch } from 'react-router-dom';
import Routes from '../../routes/Routes';
import { ROOT_PATH, DASHBOARD_PATH } from '../../routes/Slugs';

const AsideLeft = lazy(() => import('./AsideLeft'));


const { Sider, Content } = Layout;

const DefaultLayout = () => {

    const [collapsed, setCollapsed] = useState(true);

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    };

    return (
        <Layout>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <Suspense fallback={<LoadingSuspense height="100vh" />}>
                    <AsideLeft collapsed={collapsed} />
                </Suspense>
            </Sider>
            <Layout>
                <NavHeader />
                <Content className="app_page">
                    <Suspense fallback={<LoadingSuspense />}>
                        <Switch>
                            {
                                Routes.map(route => <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />)
                            }
                            <Redirect from={ROOT_PATH} to={DASHBOARD_PATH} />
                        </Switch>
                    </Suspense>
                </Content>
                <CustomFooter />
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;