import { Col, Layout, Row, theme, Typography } from "antd";
import ReactPlayer from "react-player";

const HeroSection = () => {
  const { token } = theme.useToken();
  const url = "https://www.youtube.com/live/dQw4w9WgXcQ";
  return (
    <Layout>
      <Layout.Content
        style={{
          padding: "clamp(16px, 4vw, 48px)",
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Row
          gutter={[token.sizeLG, token.sizeLG]}
          align="middle"
          justify="center"
        >
          <Col xs={24} md={12}>
            <Typography.Title
              level={1}
              style={{ marginBottom: token.marginLG }}
            >
              Most important title on the page
            </Typography.Title>
            <Typography.Paragraph style={{ fontSize: token.fontSizeLG }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum ultricies, sem urna convallis metus,
              vel suscipit nibh lacus tincidunt ante
            </Typography.Paragraph>
          </Col>
          <Col
            xs={24}
            md={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                paddingTop: "56.25%",
                width: "100%",
                maxWidth: 640,
                borderRadius: token.borderRadiusLG,
                overflow: "hidden",
              }}
            >
              <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
                light
                playing
                muted
                controls
              />
            </div>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default HeroSection;
