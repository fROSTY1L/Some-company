import { Layout, Space, Typography } from "antd";
import ContactUsButton from "../../components/ContactUsButton";

const Header = () => {
  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        padding: "0 20px",
        height: 64,
        lineHeight: "64px",
        background: "#FFFFFF",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Space
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Typography.Title level={3} style={{ margin: 0 }}>
          Some company
        </Typography.Title>
        <ContactUsButton />
      </Space>
    </Layout.Header>
  );
};

export default Header;
