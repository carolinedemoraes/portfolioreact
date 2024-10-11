import Avatar from "../img/image.png";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="avatar-wrapper">
        <img src={Avatar} alt="Imagem de Carol Moraes" />
      </div>

      <p className="title">Desenvolvedora Front-End</p>

      <SocialNetworks />
      <InformationContainer />

      <a
        href="https://www.canva.com/design/DAF3ibWSH0E/Xl78JiK--VTsQQFTfxvY8A/view?mode=prototype"
        className="btn"
      >
        Acessar Portfolio
      </a>
    </aside>
  );
};

export default Sidebar;
