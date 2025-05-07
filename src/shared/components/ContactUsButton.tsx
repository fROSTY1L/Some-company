import { Button } from "antd";
import { useLocation, useNavigate } from "react-router";

const ContactUsButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== "/contact") {
      navigate("/contact");
    }
  };

  return (
    <Button type="primary" size="large" onClick={handleClick}>
      Contact us
    </Button>
  );
};

export default ContactUsButton;
