import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadingSuspense from './components/common/LoadingSuspense';
import { LOGIN_PATH, PAGE_403_PATH, PAGE_404_PATH, PAGE_500_PATH, ROOT_PATH } from './routes/Slugs';
import PrivateRoute from './components/common/PrivateRoute';
import { AuthContext } from './contexts/AuthContextProvider';

const DefaultLayout = lazy(() => import('./components/layout/DefaultLayout'));
const WrappedLogin = lazy(() => import('./components/pages/login/Login'));
const Page403 = lazy(() => import('./components/pages/error_pages/Page403'));
const Page404 = lazy(() => import('./components/pages/error_pages/Page404'));
const Page500 = lazy(() => import('./components/pages/error_pages/Page500'));

const App = () => {

  const authContext = useContext(AuthContext);

  return (
    <div className="app_wrapper">
      <Suspense fallback={<LoadingSuspense />}>
        <BrowserRouter>
          <Switch>
            <Route exact path={LOGIN_PATH} component={WrappedLogin} />
            <PrivateRoute isLogin={authContext.isLogin} exact path={PAGE_404_PATH} component={Page404} />
            <PrivateRoute isLogin={authContext.isLogin} exact path={PAGE_403_PATH} component={Page403} />
            <PrivateRoute isLogin={authContext.isLogin} exact path={PAGE_500_PATH} component={Page500} />
            <PrivateRoute isLogin={authContext.isLogin} path={ROOT_PATH} component={DefaultLayout} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );

}

export default App;
