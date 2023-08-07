import React from "react";
import { Typography, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import PageLayout from "./PageLayout";
const { Title } = Typography;

const Dashboard = () => {
  return (
    <>
      <PageLayout
        headerContent={
          <>
            <Title level={3} style={{ color: "#000", marginTop: 0 }}>
              Danh Sách Phòng ban
            </Title>
            <Button type="primary" size={"large"} icon={<LogoutOutlined />} />
          </>
        }
        footerContent={<div>Home Page Footer</div>}
      >
        {/* page-specific content goes here */}
        <div>Dashboard</div>
      </PageLayout>
    </>
  );
};

export default Dashboard;