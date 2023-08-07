import React from "react";
import { Menu, Avatar, Space, Typography,Divider } from "antd";
import { Link,useLocation } from "react-router-dom";
import { Button } from "antd";
import { UserOutlined,HomeOutlined,TeamOutlined,UserAddOutlined,ClockCircleOutlined,MailOutlined,SolutionOutlined  } from "@ant-design/icons";
const { SubMenu, Item } = Menu;
const { Title } = Typography;
export default function SideNav() {
  const location = useLocation();
  const selectedKey = location.pathname === "/departments" ? "2" : location.pathname === "/employees" ? "4" : "1";
  return (
    
    <div style={{ }}>

    <Menu
      
      selectedKeys={[selectedKey]} // set the selected key
      defaultOpenKeys={["sub1", "sub2", "sub3", "sub4", "sub5", "sub6", "sub7"]}
      mode="inline"
      expandIcon={()=>null}
      
    >
       
        {/* <Item>
        <Space align="center" size={"small"} >
      <Avatar shape="square" size={"large"} icon={<UserOutlined />} />
      <Title level={4} style={{ margin: 0 }}>USER</Title>
    </Space>
    </Item>  */}
    {/* <Divider/>  */}
    <Item key="1" icon={<HomeOutlined />}>
  <Link to="/">Dashboard</Link>
</Item>

 <SubMenu key="sub1" title={ <Title level={5} style={{ margin: 0 }}>NHÂN VIÊN</Title>}>
<Item key="2" icon={<TeamOutlined />}>
  <Link to="/departments">Phòng Ban</Link>
</Item>
        <Item key="3" icon={<TeamOutlined />}>Phòng Ban của tôi</Item>
        <Item key="4" icon={<TeamOutlined />}>
  <Link to="/employees">Toàn bộ nhân viên</Link>
</Item>
        <Item key="5"icon={<UserAddOutlined />}>Tạo nhân viên mới</Item>
      </SubMenu>
      <SubMenu key="sub2" title={ <Title level={5} style={{ margin: 0 }}>TĂNG CA</Title>}>
        <Item key="6"icon={<ClockCircleOutlined/>}>Đơn Tăng Ca Nhân Viên</Item>
        <Item key="7"icon={<ClockCircleOutlined/>}>Đơn Tăng Ca Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub3" title={ <Title level={5} style={{ margin: 0 }}>NGHỈ PHÉP</Title>}>
        <Item key="8"icon={<SolutionOutlined />}>Đơn Nghỉ Phép Nhân Viên</Item>
        <Item key="9"icon={<SolutionOutlined />}>Đơn Nghỉ Phép Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub4" title={ <Title level={5} style={{ margin: 0 }}>ĐON KHÁC</Title>}>
        <Item key="10"icon={<MailOutlined />}>Danh Sách Đơn Khác</Item>
        <Item key="11"icon={<MailOutlined />}>Đơn Khác Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub5" title={ <Title level={5} style={{ margin: 0 }}>QUẢN LÍ LƯƠNG</Title>}>
        <Item key="12"icon={<TeamOutlined />}>Lương Nhân Viên</Item>
        <Item key="13"icon={<TeamOutlined />}>Lương Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub6" title={ <Title level={5} style={{ margin: 0 }}>HỢP ĐỒNG</Title>}>
        <Item key="14"icon={<MailOutlined />}>Hợp Đồng Nhân Viên</Item>
        <Item key="15"icon={<MailOutlined />}>Hợp Đồng Của Tôi</Item>
      </SubMenu>
      <SubMenu key="sub7" title={ <Title level={5} style={{ margin: 0 }}>TUYỂN DỤNG</Title>}>
        <Item key="16"icon={<TeamOutlined />}>Danh sách ứng viên</Item>
      </SubMenu>
    </Menu>
    </div>
  );
}
