import { Layout, Typography } from "antd";

const Footer = ({ style }: { style?: React.CSSProperties }) => {
  return (
    <Layout.Footer
      style={{
        textAlign: "center",
        padding: "clamp(16px, 4vw, 48px)",
        background: "#FFFFFF",
        ...style,
      }}
    >
      <Typography.Title
        level={4}
        style={{
          marginBottom: "2rem",
          width: "100%",
        }}
      >
        Some Company 2024
      </Typography.Title>
    </Layout.Footer>
  );
};

export default Footer;
