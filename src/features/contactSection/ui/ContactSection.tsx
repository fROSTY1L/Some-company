import { Layout, Typography } from "antd";
import ContactUsButton from "../../../shared/components/ContactUsButton";

const ContactSection = () => {
  return (
    <Layout
      style={{
        background: "transparent",
        textAlign: "center",
        padding: "clamp(16px, 4vw, 48px)",
      }}
    >
      <Typography.Title
        level={2}
        style={{
          marginBottom: "2rem",
          width: "100%",
        }}
      >
        Less important title
      </Typography.Title>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ContactUsButton />
      </div>
    </Layout>
  );
};

export default ContactSection;
