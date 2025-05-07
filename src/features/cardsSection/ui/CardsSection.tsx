import { Card, Col, Layout, Row, Typography } from "antd";
import ContactUsButton from "../../../shared/components/ContactUsButton";

const CardsSection = () => {
  const cardsData = [
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
    {
      title: "Title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
    },
  ];

  return (
    <Layout style={{ background: "#FFFFFF" }}>
      <Layout.Content
        style={{
          padding: "clamp(16px, 4vw, 48px)",
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
        }}
      >
        <Typography.Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            width: "100%",
          }}
        >
          Also very important title
        </Typography.Title>

        <Row gutter={[24, 24]}>
          {cardsData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card title={card.title} hoverable style={{ height: "100%" }}>
                {card.content}
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <ContactUsButton />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default CardsSection;
