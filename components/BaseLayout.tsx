import { Icon, Layout, Menu } from 'antd';
import React, { FunctionComponentElement, PropsWithChildren } from 'react';

const { Header, Content, Sider } = Layout;

export default function BaseLayout(props: PropsWithChildren<{}>): FunctionComponentElement<{}> {
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
            <Icon
              type="menu-unfold"
              onClick={(): void => {}}
              style={{
                fontSize: '18px',
                lineHeight: '64px',
                paddingLeft: '24px',
                paddingRight: '24px',
                cursor: 'pointer',
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
