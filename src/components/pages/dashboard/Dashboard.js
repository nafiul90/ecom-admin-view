import React from 'react';
import { PageHeader, Row, Col, Card, Avatar } from 'antd';
import PageWrapper from '../../common/PageWrapper';

/* SCSS */
import './dashboard.scss'

const { Meta } = Card;

const Dashboard = () => {

    const pageHeader = <PageHeader title="Dashboard" subTitle="This is a subtitle" />;

    return (
        <PageWrapper
            pageHeader={pageHeader}
        >
            <Row gutter={4}>
                <Col xs={24} sm={8}>
                    <Card>
                        <Meta
                            avatar={<Avatar icon='user' />}
                            title="Number Of Users"
                            description={10}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card>
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
        </PageWrapper>
    );
}

export default Dashboard;