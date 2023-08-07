// import "./App.css";
// import SideNav from "./Components/SideNav";
// import dashboard from "./Components/dashboard";
// import { Routes, Route } from "react-router-dom";
// import { Layout, Space, Menu, Avatar, Typography, Button } from "antd";

// import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
// const { Header, Footer, Sider, Content } = Layout;
// const { SubMenu, Item } = Menu;
// const { Title } = Typography;
// const sideHeaderStyle = {
//   // color: "#fff",
//   height: 50,
//   width: 300,
//   position: "fixed",
//   // padding: 100,
//   paddingInline: 20,
//   // paddingBottom:10,
//   lineHeight: "auto",
//   backgroundColor: "#fff",
//   borderRight: "1px solid #ccc",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
// };
// const headerStyle = {
//   textAlign: "left",
//   // color: "#fff",
//   height: 50,
//   width: "auto",
//   backgroundColor: "#fff",
//   paddingInline: 100,
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   lineHeight: "auto",
//   borderBottom: "1px solid #ccc",
//   // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
// };
// const contentStyle = {
//   textAlign: "center",
//   height: "100vh",
//   overflow: "initial",
//   // marginLeft: "auto",
//   lineHeight: "auto",

//   color: "#fff",
//   backgroundColor: "#fff",
// };

// const siderStyle = {
//   overflow: "auto",
//   height: "auto",
//   position: "fixed",
//   left: 0,
//   top: 50,
//   bottom: 0,
//   textAlign: "left",

//   lineHeight: "auto",
//   color: "#fff",
//   backgroundColor: "#fff",
//   borderRight: "1px solid #ccc",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
// };

// const footerStyle = {
//   textAlign: "center",
//   height: 40,
//   width: "auto",
//   color: "#fff",
//   backgroundColor: "#fff",
//   borderTop: "1px solid #ccc",
//   // boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.15)',
//   // marginLeft: "auto",
//   left: 0,
//   top: 0,
//   bottom: 0,
// };

// function App() {
//   return (
//     <div className="App">
//       {/* <Space
//         direction="vertical"
//         style={{
//           width: "100%",
//         }}
//         size={[0, 48]}
//       > */}
//       <Layout style={{ height: "100vh" }}>
//         {/* <Layout> */}
//         <Header style={sideHeaderStyle}>
//           <Space align="center" size={"small"} direction="horizontal">
//             <Avatar
//               shape="square"
//               size={"large"}
//               icon={<UserOutlined />}
//               style={{ marginBottom: 20 }}
//             />
//             <Title level={4} style={{ marginTop: 0 }}>
//               Nguyen Van Quan Ly
//             </Title>
//           </Space>
//         </Header>
//         <Sider style={siderStyle} width={300}>
//           <SideNav />
//         </Sider>
//         {/* </Layout> */}
//         <Layout style={{ marginLeft: 300 }}>
//           <Header style={headerStyle}>
//             {/* <Space align="center" size={"small"} direction="horizontal"> */}
//             <Title level={3} style={{ color: "#000", marginTop: 0 }}>
//               Danh Sách Phòng ban
//             </Title>
//             <Button
//               // id="right"
//               type="primary"
//               size={"large"}
//               icon={<LogoutOutlined />}
//               style={{}}
//             />
//             {/* </Space> */}
//           </Header>
//           <Content style={contentStyle}>
//             {" "}
//             <div>Content</div>
//           </Content>
//           <Footer style={footerStyle}>Footer</Footer>
//         </Layout>
//       </Layout>
//       {/* </Space> */}

//       {/* <Routes>
//         <Route path="/" element={<home/>}></Route>

//       </Routes> */}
//     </div>
//   );
// }

// export default App;
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Departments from "./Components/Pages/Departments/Departments";
import Employees from "./Components/Pages/Employees/Employees";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
