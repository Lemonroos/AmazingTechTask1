import React from "react";
import { Table, Button, Typography, Space, Badge, Divider } from "antd";
import {
  EllipsisOutlined,
  PlusOutlined,
  UserOutlined,
  ContactsOutlined,
  PhoneOutlined,
  CaretUpFilled,
} from "@ant-design/icons";
import PageLayout from "../../PageLayout";
import departmentsData from "../../data/departmentsData";
import employeesData from "../../data/employeesData";
function updateEmployeeCount(departmentsData, employeesData) {
  departmentsData.forEach((department) => {
    department.employees = employeesData.filter(
      (employee) => employee.department === department.name
    ).length;
  });
}
const { Title, Text } = Typography;
const renderBoldText = (text) => (
  <Typography.Text strong>{text}</Typography.Text>
);
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const columns = [
  {
    title: "",
    dataIndex: "",
    key: "",
    render: () => <Button type="text" icon={<EllipsisOutlined />} />,
    width: 100,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 100,
    render: renderBoldText,
  },
  {
    title: (
      <Space>
        <UserOutlined />
        Tên phòng ban
      </Space>
    ),
    dataIndex: "name",
    key: "name",
    width: 200,
    render: (text) => (
      <Space>
        <Badge color={getRandomColor()} />
        <Typography.Text underline strong>
          {text}
        </Typography.Text>
      </Space>
    ),
  },
  {
    title: (
      <Space>
        <UserOutlined />
        Quản lí
      </Space>
    ),

    dataIndex: "manager",
    key: "manager",
    render: renderBoldText,
    filters: [
      {
        text: "Filter",
        value: "Submenu",
        children: [
          {
            text: "Nguyen Van Quan Ly",
            value: "Nguyen Van Quan Ly",
          },
          {
            text: "Blah Blah Blah",
            value: "Blah Blah Blah",
          },
        ],
      },
    ],
    onFilter: (value, record) => record.manager.indexOf(value) === 0,
    sorter: (a, b) => a.manager.length - b.manager.length,
    sortDirections: ["ascend"],

    width: 200,
  },
  {
    title: (
      <Space>
        <Title level={4} style={{ color: "#000", marginTop: 0 }}>
          #
        </Title>
        Số nhân viên
      </Space>
    ),
    dataIndex: "employees",
    key: "employees",
    width: 150,
    render: renderBoldText,
  },
  {
    title: (
      <Space>
        <ContactsOutlined />
        Email Quản lý
      </Space>
    ),
    dataIndex: "email",
    key: "email",
    width: 200,
    render: renderBoldText,
  },
  {
    title: (
      <Space>
        <PhoneOutlined />
        Số Điện Thoại
      </Space>
    ),
    dataIndex: "phone",
    key: "phone",
    width: 150,
    render: renderBoldText,
  },
];

const Departments = () => {
  updateEmployeeCount(departmentsData, employeesData);
  return (
    <>
      <PageLayout
        headerContent={
          <>
            <Title level={3} style={{ color: "#000", marginTop: 0 }}>
              Danh Sách Phòng ban
            </Title>
          </>
        }
        footerContent={<div>Home Page Footer</div>}
      >
        <div
          style={{
            padding: "1% 0 5px 0",
            margin: "0 10% 10px 10%",
            borderBottom: "1px solid #ccc",
            textAlign: "right",
          }}
        >
          <Button type="primary" size={"large"} icon={<PlusOutlined />}>
            Thêm Phòng Ban
          </Button>
        </div>

        <div
          style={{
            padding: "0 10% 0 10%",
          }}
        >
          <Table
            size="large"
            dataSource={departmentsData}
            columns={columns}
            scroll={{
              x: 1500,
              y: 500,
            }}
            style={{
              border: "1px solid #ccc",
              boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
            }}
            pagination={{
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total}`,
              // add pageSize property
              pageSize: 11,
              defaultPageSize: 11,
            }}
            className="my-table"
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Departments;
