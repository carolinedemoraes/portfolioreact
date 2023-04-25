import Avatar from "../img/eu.jpg";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Carol Moraes" />
      <p className="title">Desenvolvedora Front-End</p>
      <SocialNetworks />
      <InformationContainer />

      <a href="" className="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
