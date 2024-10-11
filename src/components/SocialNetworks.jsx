import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  {
    name: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/caroline-moraes-61570a168/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: "https://github.com/carolinedemoraes",
  },
];
const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
  npm;
};

export default SocialNetworks;
