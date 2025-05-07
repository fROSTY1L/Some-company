import { Card, Col, Layout, Row, Typography, Skeleton } from "antd";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import ContactUsButton from "../../../shared/components/ContactUsButton";

// Lazy-loaded Card component
const LazyCard = lazy(() => import("./LazyCard"));

const CardsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => [...prev, index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

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
          Simple Cards Section
        </Typography.Title>

        <Row gutter={[24, 24]}>
          {cardsData.map((card, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              ref={(el) => setCardRef(el, index)}
              data-index={index}
            >
              {visibleCards.includes(index) ? (
                <Suspense
                  fallback={
                    <Card loading style={{ height: 200 }}>
                      <Skeleton active />
                    </Card>
                  }
                >
                  <LazyCard title={card.title} content={card.content} />
                </Suspense>
              ) : (
                <div style={{ height: 200 }} /> // Placeholder
              )}
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
