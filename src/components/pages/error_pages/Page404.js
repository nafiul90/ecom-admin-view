import React from 'react';
import { Link } from 'react-router-dom';
import ErrorLayout from '../../layout/error_layout/ErrorLayout';
import { Button } from 'antd';
import { DASHBOARD_PATH } from '../../../routes/Slugs';

const Page404 = () => {
    return (
        <ErrorLayout status={404} subTitle="Sorry, the page you visited does not exist.">
            <Link to={DASHBOARD_PATH}>
                <Button>
                    Go To Dashboard
                </Button>
            </Link>
        </ErrorLayout>
    );
}

export default Page404;