import { Layout } from "antd";
import HeroSection from "../features/heroSection";
import CardsSection from "../features/cardsSection";
import ContactSection from "../features/contactSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <CardsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
