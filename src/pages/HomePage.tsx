import { Layout } from "antd";
import HeroSection from "../features/heroSection";
import CardsSection from "../features/cardsSection";
import ContactSection from "../features/contactSection";
import { SEO } from "../app/SEO";

const Home = () => {
  return (
    <>
    <SEO
        title="Some company"
        description="Some company description"
      />
      <Layout>
      <HeroSection />
      <CardsSection />
      <ContactSection />
    </Layout>
    </>
    
  );
};

export default Home;
