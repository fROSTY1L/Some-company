import { Outlet } from "react-router-dom";
import Header from "./shared/header/ui/Header";
import Footer from "./shared/footer/ui/Footer";
import { Layout } from "antd";

const { Content } = Layout;

export const AppLayout = () => {
  return (
    <Layout
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Content
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Content>

      <Footer
        style={{
          flexShrink: 0,
        }}
      />
    </Layout>
  );
};
