import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <p>+351 927 018 251</p>
      </div>

      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <p>caroliineedemoraes@gmail.com</p>
      </div>

      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <p>Porto, PT</p>
      </div>
    </section>
  );
};

export default InformationContainer;
