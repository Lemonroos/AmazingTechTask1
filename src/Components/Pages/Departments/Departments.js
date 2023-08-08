import React from "react";
import { Table, Button, Typography, Space, Badge, Divider } from "antd";
import {
  EllipsisOutlined,
  PlusOutlined,
  UserOutlined,
  ContactsOutlined,
  PhoneOutlined,
  CaretUpFilled,
  MoreOutlined,
  ArrowUpOutlined,
  NumberOutlined
} from "@ant-design/icons";
import PageLayout from "../../PageLayout";
import departmentsData from "../../data/departmentsData";
import employeesData from "../../data/employeesData";
import { getColor } from "../../Utils/DepartmentColor";
function findManager(department) {
  return employeesData.find(
    (employee) =>
      employee.department === department && employee.role === "manager"
  );
}

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

const columns = [
  {
    title: "",
    dataIndex: "",
    key: "",
    render: () => <Button type="text" icon={<EllipsisOutlined />} />,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
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
    render: (text) => (
      <Space>
        <Badge color={getColor(text)} />
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <ArrowUpOutlined
            style={{
              marginLeft: "8px",
              // color: sort === "ascend" ? "blue" : undefined,
            }}
          />
        </div>
      </Space>
    ),

    dataIndex: "manager",
    key: "manager",
    render: (text, record) => {
      const manager = findManager(record.name);
      return manager ? renderBoldText(manager.name) : null;
    },
    filters: employeesData
      .filter((employee) => employee.role === "manager")
      .map((manager) => ({
        text: manager.name,
        value: manager.name,
      })),
    onFilter: (value, record) => {
      const manager = findManager(record.name);
      return manager && manager.name.indexOf(value) === 0;
    },
    sorter: (a, b) => a.manager.length - b.manager.length,
    sortDirections: ["ascend"],
    filterIcon: <MoreOutlined style={{ fontSize: "18px" }} />,
  },
  {
    title: (
      <Space>
        <NumberOutlined />
        Số nhân viên
      </Space>
    ),
    dataIndex: "employees",
    key: "employees",
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
    render: (text, record) => {
      const manager = findManager(record.name);
      return manager ? renderBoldText(manager.email) : null;
    },
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
    render: (text, record) => {
      const manager = findManager(record.name);
      return manager ? renderBoldText(manager.phone) : null;
    },
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
              x: "max-content",
            }}
            style={{
              border: "1px solid #ccc",
              boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
            }}
            pagination={{
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total}`,
              pageSize: 6,
            }}
            className="my-table"
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Departments;
