import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <h3></h3>
        <p>(53)98456-4996</p>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <h3></h3>
        <p>caroliineedemoraes@gmail.com</p>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <h3></h3>
        <p>Porto Alegre- RS</p>
      </div>
    </section>
  );
};

export default InformationContainer;
