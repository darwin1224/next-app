import { Icon, Layout, Menu } from 'antd';
import React, { Component, ReactNode } from 'react';

const { Header, Content, Sider } = Layout;

export default class BaseLayout extends Component<{}, {}> {
  public render(): ReactNode {
    return (
      <>
        <Layout style={{ height: '100vh' }}>
          <Sider collapsible>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>Account</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>Settings</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon className="trigger" type="menu-unfold" onClick={(): void => {}} />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}
