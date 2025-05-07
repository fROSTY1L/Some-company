import { Card } from "antd";
import React from "react";

interface LazyCardProps {
  title: string;
  content: string;
}

const LazyCard: React.FC<LazyCardProps> = ({ title, content }) => {
  return (
    <Card
      title={title}
      hoverable
      style={{
        height: "100%",
        transition: "opacity 0.3s ease",
      }}
    >
      {content}
    </Card>
  );
};

export default LazyCard;
