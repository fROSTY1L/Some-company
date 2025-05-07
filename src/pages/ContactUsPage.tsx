import { Layout } from "antd";
import ContactForm from "../features/contactForm";
import { SEO } from "../app/SEO";

const { Content } = Layout;

const ContactUsPage = () => {
  return (
    <>
    <SEO
        title="Contact form"
        description="Contact us via the form"
      />
    <Content
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 0",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1200, padding: "0 24px" }}>
        <ContactForm />
      </div>
    </Content>
    </>
  );
};

export default ContactUsPage;
