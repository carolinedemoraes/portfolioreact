import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
import { FaFigma, FaSass } from "react-icons/fa";
import "../styles/components/tecnologiescontainer.sass";

const tecnologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "figma", name: "Figma", icon: <FaFigma /> },
  { id: "sass", name: "SaSS", icon: <FaSass /> },
];

const TecnologiesContainer = () => {
  return (
    <section className="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className="tecnologies-grid">
        {tecnologies.map((tech) => (
          <div className="tecnology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tecnology-info">
              <h3>{tech.name}</h3>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TecnologiesContainer;
