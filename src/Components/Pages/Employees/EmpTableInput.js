import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import React from "react";
const { Search } = Input;
const { Option } = Select;

const EmpTableInput = ({
  searchText,
  setSearchText,
  filterDepartment,
  setFilterDepartment,
  handleRefresh,
}) => {
  const handleSearchChange = (event) => {
    setSearchText(event.target.value.toLowerCase());
  };

  const handleFilterChange = (value) => {
    setFilterDepartment(value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 16,
        paddingInline: 20,
      }}
    >
      <Input
        placeholder="Tìm kiếm"
        onChange={handleSearchChange}
        style={{
          width: 200,
          border: "none",
          //   padding:" 0 0 0 ",

          borderBottom: "1px solid #d9d9d9",
          borderRadius: 0,
        }}
        value={searchText}
        bordered={false}
      />
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      >
        <Select
          defaultValue=""
          // style={{ width:"" }}
          onChange={handleFilterChange}
          value={filterDepartment}
          bordered={false}
        >
          <Option value="">Tất Cả Phòng Ban</Option>
          <Option value="Finance">Phòng Kế Toán</Option>
          <Option value="Human Resource">Phòng Nhân Sự</Option>
          <Option value="Sales">Phòng Kinh Doanh</Option>
          <Option value="Marketing">Phòng Tiếp Thị</Option>
          <Option value="Operations">Phòng Vận Hành</Option>
          <Option value="Engineering">Phòng Kỹ Thuật</Option>
          <Option value="Customer Support">Phòng Hỗ Trợ Khách Hàng</Option>
          <Option value="Research & Development">
            Phòng Nghiên Cứu Và Phát Triển
          </Option>
          <Option value="Quality Assurance">Phòng Đảm Bảo Chất Lượng</Option>
          <Option value="Design">Phòng Thiết Kế</Option>
          <Option value="Chăm sóc khách hàng">Phòng Chăm Sóc Khách Hàng</Option>
        </Select>
        <Button
          style={{
            color: "#00FF00",
            borderColor: "#00FF00",
          }}
          onClick={handleRefresh}
        >
          Làm mới
        </Button>
      </div>
      <Button type="primary" size={"large"} icon={<PlusOutlined />}>
        Tạo nhân viên mới
      </Button>
    </div>
  );
};

export default EmpTableInput;
