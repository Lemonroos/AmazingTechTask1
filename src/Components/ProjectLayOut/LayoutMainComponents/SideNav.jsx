import React from "react";
import { Menu, Space, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  TeamOutlined,
  UserAddOutlined,
  ClockCircleOutlined,
  MailOutlined,
  SolutionOutlined,
  FileDoneOutlined,
  FileAddOutlined,
  DollarOutlined,
  AuditOutlined,
} from "@ant-design/icons";
const { SubMenu, Item } = Menu;
const { Title } = Typography;
export default function SideNav() {
  const location = useLocation();
  const selectedKey =
    location.pathname === "/departments"
      ? "2"
      : location.pathname === "/employees"
      ? "4"
      : "1";
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem(<Link to="/">Dashboard</Link>, "1", <HomeOutlined />),
    getItem(<Title level={5}>NHÂN VIÊN</Title>, "sub1", <TeamOutlined />, [
      getItem(<Link to="/departments">Phòng Ban</Link>, "2"),
      getItem("Phòng Ban của tôi", "3"),
      getItem(<Link to="/employees">Toàn bộ nhân viên</Link>, "4"),
      getItem("Tạo nhân viên mới", "5"),
    ]),
    getItem(<Title level={5}>TĂNG CA</Title>, "sub2", <FileDoneOutlined />, [
      getItem("Đơn Tăng Ca Nhân Viên", "6"),
      getItem("Đơn Tăng Ca Của Tôi", "7"),
    ]),
    getItem(<Title level={5}>NGHỈ PHÉP</Title>, "sub3", <SolutionOutlined />, [
      getItem("Đơn Nghỉ Phép Nhân Viên", "8"),
      getItem("Đơn Nghỉ Phép Của Tôi", "9"),
    ]),
    getItem(<Title level={5}>ĐƠN KHÁC</Title>, "sub4", <FileAddOutlined />, [
      getItem("Danh Sách Đơn Khác", "10"),
      getItem("Đơn Khác Của Tôi", "11"),
    ]),
    getItem(
      <Title level={5}>QUẢN LÍ LƯƠNG</Title>,
      "sub5",
      <DollarOutlined />,
      [getItem("Lương Nhân Viên", "12"), getItem("Lương Của Tôi", "13")]
    ),
    getItem(<Title level={5}>HỢP ĐỒNG</Title>, "sub6", <AuditOutlined />, [
      getItem("Hợp Đồng Nhân Viên", "14"),
      getItem("Hợp Đồng Của Tôi", "15"),
    ]),
    getItem(<Title level={5}>TUYỂN DỤNG</Title>, "sub7", <MailOutlined />, [
      getItem("Danh sách ứng viên", "16"),
    ]),
  ];
  return (
    <div>
      <Menu
        selectedKeys={[selectedKey]} // set the selected key
        defaultOpenKeys={[
          "sub1",
          "sub2",
          "sub3",
          "sub4",
          "sub5",
          "sub6",
          "sub7",
        ]}
        mode="inline"
        // expandIcon={()=>null}
        items={items}
      />
      {/* <Item key="1" icon={<HomeOutlined />}>
  <Link to="/">Dashboard</Link>
</Item>

 <SubMenu key="sub1" title={ <Title level={5}  >NHÂN VIÊN</Title>}>
<Item key="2" icon={<TeamOutlined />}>
  <Link to="/departments">Phòng Ban</Link>
</Item>
        <Item key="3" icon={<TeamOutlined />}>Phòng Ban của tôi</Item>
        <Item key="4" icon={<TeamOutlined />}>
  <Link to="/employees">Toàn bộ nhân viên</Link>
</Item>
        <Item key="5"icon={<UserAddOutlined />}>Tạo nhân viên mới</Item>
      </SubMenu>
      <SubMenu key="sub2" title={ <Title level={5} >TĂNG CA</Title>}>
        <Item key="6"icon={<ClockCircleOutlined/>}>Đơn Tăng Ca Nhân Viên</Item>
        <Item key="7"icon={<ClockCircleOutlined/>}>Đơn Tăng Ca Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub3" title={ <Title level={5} >NGHỈ PHÉP</Title>}>
        <Item key="8"icon={<SolutionOutlined />}>Đơn Nghỉ Phép Nhân Viên</Item>
        <Item key="9"icon={<SolutionOutlined />}>Đơn Nghỉ Phép Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub4" title={ <Title level={5} >ĐƠN KHÁC</Title>}>
        <Item key="10"icon={<MailOutlined />}>Danh Sách Đơn Khác</Item>
        <Item key="11"icon={<MailOutlined />}>Đơn Khác Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub5" title={ <Title level={5} >QUẢN LÍ LƯƠNG</Title>}>
        <Item key="12"icon={<TeamOutlined />}>Lương Nhân Viên</Item>
        <Item key="13"icon={<TeamOutlined />}>Lương Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub6" title={ <Title level={5} >HỢP ĐỒNG</Title>}>
        <Item key="14"icon={<MailOutlined />}>Hợp Đồng Nhân Viên</Item>
        <Item key="15"icon={<MailOutlined />}>Hợp Đồng Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub7" title={ <Title level={5} >TUYỂN DỤNG</Title>}>
        <Item key="16"icon={<TeamOutlined />}>Danh sách ứng viên</Item>
      </SubMenu> */}
    </div>
  );
}
