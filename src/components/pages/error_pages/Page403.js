import React from 'react';
import ErrorLayout from '../../layout/error_layout/ErrorLayout';
import { DASHBOARD_PATH } from '../../../routes/Slugs';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Page403 = () => {
    return (
        <ErrorLayout status={403} subTitle="Sorry, you are not authorized to access this page.">
            <Link to={DASHBOARD_PATH}>
                <Button>
                    Go To Dashboard
                </Button>
            </Link>
        </ErrorLayout>
    );
}

export default Page403;