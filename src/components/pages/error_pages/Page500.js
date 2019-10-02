import React from 'react';
import ErrorLayout from '../../layout/error_layout/ErrorLayout';
import { DASHBOARD_PATH } from '../../../routes/Slugs';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Page403 = () => {
    return (
        <ErrorLayout status={500} subTitle="Sorry, something went wrong. Please try again later.">
            <Link to={DASHBOARD_PATH}>
                <Button>
                    Go To Dashboard
                </Button>
            </Link>
        </ErrorLayout>
    );
}

export default Page403;