import React, { useContext } from 'react';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';

/* SCSS */
import './nav_header.scss'
import { AuthContext } from '../../../contexts/AuthContextProvider';

const { Header } = Layout;

const NavHeader = () => {

    const authContext = useContext(AuthContext);

    const logout = () => {
        authContext.logoutRequest();
    }

    const menu = (
        <Menu style={{ minWidth: "120px", backgroundColor: "#ffffff" }}>
            <Menu.Item key="0">
                <Link to="">Profile</Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="1" onClick={logout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <Header className="nav_header" >
            <Dropdown className="drop_down" overlay={menu} trigger={['click']}>
                <div>
                    <span>admin@ecourier.org</span> &nbsp;
                    <Avatar size="large" icon="user" className="ant-dropdown-link" />
                </div>
            </Dropdown>
        </Header>
    );
}

export default NavHeader;