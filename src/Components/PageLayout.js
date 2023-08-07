import React from "react";
import { Layout, Space, Avatar, Typography, Button } from "antd";
import SideNav from "./SideNav";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const sideHeaderStyle = {
  // color: "#fff",
  height: 50,
  width: 300,
  position: "fixed",
  // padding: 100,
  paddingInline: 20,
  // paddingBottom:10,
  lineHeight: "auto",
  backgroundColor: "#fff",
  borderRight: "1px solid #ccc",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  zIndex: 5,
};
const headerStyle = {
  // textAlign: "ce",
  // color: "#fff",
  height: 50,
  width: "auto",
  backgroundColor: "#fff",
  paddingInline: 50,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  lineHeight: "auto",
  borderBottom: "1px solid #ccc",
  // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
};
const contentStyle = {
  position:'',
  paddingTop:"5vh",
  // bottom:100,
  textAlign: "center",
  // height: "100vh",
  overflow: "initial",
  // marginLeft: "auto",
  lineHeight: "auto",

  // color: "#fff",
  backgroundColor: "#fff",
};

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  left: 0,
  top: 50,
  bottom: 0,
  textAlign: "left",
  zIndex: 5,

  lineHeight: "auto",
  color: "#fff",
  backgroundColor: "#fff",
  borderRight: "1px solid #ccc",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
};

const footerStyle = {
  textAlign: "center",
  height: "auto",
  // width: "auto",
  // paddingInline: 100,
  position: "",
  // color: "#fff",
  // backgroundColor: "",
  borderTop: "1px solid #ccc",
  boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
  // // marginLeft: "auto",
  // left: 0,
  // top: 0,
  // bottom: 0,
};
const PageLayout = ({ children, headerContent, footerContent }) => {
  return (
    <>
      <Layout style={{ height: "100vh", overflow: "initial" }}>
        <Header style={sideHeaderStyle}>
          <Space align="center" size={"small"} direction="horizontal">
            <Avatar
              shape="square"
              size={"large"}
              icon={<UserOutlined />}
              style={{ marginBottom: 20 }}
            />
            <Title level={4} style={{ marginTop: 0 }}>
              Logged In User
            </Title>
          </Space>
        </Header>

        <Sider style={siderStyle} width={300}>
          <SideNav />
        </Sider>

        <Layout style={{ marginLeft: 300 }}>
          {/* 300 */}
          <Header style={headerStyle}>
            {headerContent}
            {/* <Button type="primary" size={"large"} icon={<LogoutOutlined />} /> */}
            <Button
              type="ghost" // set type to "ghost"
              size={"large"}
              icon={<LogoutOutlined />}
              style={{
                color: "#1890ff",
                backgroundColor: "#fff",
                borderColor: "1px solid #ccc",
                boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
              }} // apply custom styles
            />
          </Header>
          <Content style={contentStyle}>{children}</Content>
          {/* <Footer style={footerStyle}>{footerContent}</Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default PageLayout;
