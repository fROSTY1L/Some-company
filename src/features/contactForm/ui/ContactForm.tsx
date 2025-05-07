import React, { useState } from "react";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Grid,
  Typography,
  message,
  Spin,
  Result,
} from "antd";

const { TextArea } = Input;
const { Title } = Typography;
const { useBreakpoint } = Grid;

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const screens = useBreakpoint();
  const [form] = Form.useForm<FormValues>();
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onFinish = async (values: FormValues) => {
    setSubmitting(true);
    try {
      const response = await fetch("/.netlify/functions/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSuccessMessage(data.message);
      setSubmitSuccess(true);
      form.resetFields();
    } catch {
      message.error("Failed to submit form. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitting && !submitSuccess) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Spin size="large" tip="Sending your message..." />
      </div>
    );
  }

  if (submitSuccess) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: screens.xs ? "16px" : "24px",
          textAlign: "center",
        }}
      >
        <Result
          status="success"
          title="Form submitted successfully!"
          subTitle={successMessage}
          extra={[
            <Button
              type="primary"
              key="back"
              onClick={() => setSubmitSuccess(false)}
              size={screens.xs ? "middle" : "large"}
            >
              Submit another message
            </Button>,
          ]}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: screens.xs ? "16px" : "24px",
      }}
    >
      <Title
        level={screens.xs ? 2 : 1}
        style={{
          marginBottom: screens.xs ? "24px" : "32px",
          textAlign: "center",
        }}
      >
        Only CTA on the page
      </Title>

      <Form
        form={form}
        name="contact"
        style={{
          width: "100%",
          maxWidth: screens.xs ? "100%" : 500,
          padding: screens.xs ? "16px" : "24px",
          border: "1px solid #f0f0f0",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.09)",
        }}
        onFinish={onFinish}
      >
        <Form.Item<FormValues>
          name="name"
          rules={[{ required: true, message: "Please input your Name!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Name"
            size={screens.xs ? "middle" : "large"}
          />
        </Form.Item>

        <Form.Item<FormValues>
          name="email"
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            size={screens.xs ? "middle" : "large"}
          />
        </Form.Item>

        <Form.Item<FormValues>
          name="message"
          rules={[
            { required: true, message: "Please input your Message!" },
            { max: 500, message: "Message cannot exceed 500 characters!" },
          ]}
        >
          <TextArea
            placeholder="Your message..."
            rows={screens.xs ? 3 : 4}
            showCount
            maxLength={500}
            size={screens.xs ? "middle" : "large"}
          />
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            size={screens.xs ? "middle" : "large"}
            loading={submitting}
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
