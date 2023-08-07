import React, { useState } from "react";
import {
  Table,
  Button,
  Typography,
  Space,
  Badge,
  Avatar,
  Tag,
  Select,
  Input,
} from "antd";
import {
  EllipsisOutlined,
  PlusOutlined,
  UserOutlined,
  IdcardOutlined,
  PhoneOutlined,
  ManOutlined,
  WomanOutlined,
  MailOutlined,
  BankOutlined,
  CalendarOutlined,
  HomeOutlined,
  GlobalOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import PageLayout from "../../PageLayout";
import EmpTableInput from "./EmpTableInput";
import employeesData from "../../data/employeesData";
const { Option } = Select;
// const { Search } = Input;

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
    title: "",
    dataIndex: "avatar",
    key: "avatar",
    width: 100,
    render: () => <Avatar size="small" icon={<UserOutlined />} />,
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
        <UnorderedListOutlined />
        Tên Nhân Viên
      </Space>
    ),
    dataIndex: "name",
    key: "name",
    width: 200,
    render: (text, record) => (
      <>
        <Avatar src={record.avatar} style={{ marginRight: "10px" }} />
        {renderBoldText(text)}
      </>
    ),
  },

  {
    title: (
      <Space>
        <UnorderedListOutlined />
        Phòng Ban
      </Space>
    ),
    dataIndex: "department",
    key: "department",
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
        <PhoneOutlined />
        Số điện thoại
      </Space>
    ),
    dataIndex: "phone",
    key: "phone",
    width: 150,
    render: renderBoldText,
  },

  {
    title: (
      <Space>
        <UnorderedListOutlined />
        Giới tính
      </Space>
    ),
    dataIndex: "gender",
    key: "gender",
    width: 150,
    render: (text) => (
      <Tag color={text === "Nam" ? "#1890ff" : "#eb2f96"}>{text}</Tag>
    ),
  },

  {
    title: (
      <Space>
        <MailOutlined />
        Email
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
        <BankOutlined />
        Ngân hàng
      </Space>
    ),
    dataIndex: "bank",
    key: "bank",
    width: 150,
    render: renderBoldText,
  },
  {
    title: (
      <Space>
        <CalendarOutlined />
        Ngày sinh
      </Space>
    ),
    dataIndex: "birthdate",
    key: "birthdate",
    width: 150,
    render: renderBoldText,
  },
  {
    title: (
      <Space>
        <HomeOutlined />
        Địa chỉ
      </Space>
    ),
    dataIndex: "address",
    key: "address",
    width: 200,
    render: renderBoldText,
  },
  {
    title: (
      <Space>
        <GlobalOutlined />
        Quốc gia
      </Space>
    ),
    dataIndex: "country",
    key: "country",
    width: 150,
    render: renderBoldText,
  },
  {
    title: (
      <Space>
        <Title level={4} style={{ color: "#000", marginTop: 0 }}>
          #
        </Title>
        Tài khoản ngân hàng
      </Space>
    ),
    dataIndex: "account",
    key: "account",
    width: 200,
    render: renderBoldText,
  },
];

const Employees = () => {
  const [searchText, setSearchText] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const handleFilterChange = (value) => {
    setFilterDepartment(value);
  };

  const handleRefresh = () => {
    setSearchText("");
    setFilterDepartment("");
  };

  const filteredData = employeesData.filter((employee) => {
    if (searchText && !employee.name.toLocaleLowerCase().includes(searchText)) {
      return false;
    }
    if (filterDepartment && employee.department !== filterDepartment) {
      return false;
    }
    return true;
  });

  return (
    <>
      <PageLayout
        headerContent={
          <>
            <Title level={3} style={{ color: "#000", marginTop: 0 }}>
              Danh Sách Nhân Viên
            </Title>
          </>
        }
        footerContent={<div>Home Page Footer</div>}
      >
        <div
          style={{
            margin: "0 10% 10px 10%",
            border: "1px solid #ccc",
            boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
          }}
        >
          <EmpTableInput
            searchText={searchText}
            setSearchText={setSearchText}
            filterDepartment={filterDepartment}
            setFilterDepartment={setFilterDepartment}
            handleRefresh={handleRefresh}
          />
          {/* <Button type="primary" size={"large"} icon={<PlusOutlined />}>
            Tạo nhân viên mới
          </Button> */}
        </div>

        <div
          style={{
            padding: "0 10% 0 10%",
          }}
        >
          <Table
            size="large"
            dataSource={filteredData}
            columns={columns}
            scroll={{
              x: "max-content",
              // y: 500,
            }}
            style={{
              border: "1px solid #ccc",
              boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.15)",
            }}
            pagination={{
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total}`,
              pageSize: 7,
              // defaultPageSize: 5,
            }}
            className="my-table offset-pagination"
            // rowKey={record => record.id}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Employees;
