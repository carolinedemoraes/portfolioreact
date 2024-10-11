import projetos from "../img/projetos.png";
import "../styles/components/ProjectsContainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projetcs-container">
      <h2>Projetos</h2>
      <p>
        Alguns projetos que desenvolvi utizando HTML, CSS, JavaScript, React e
        Figma.
      </p>

      <div id="projetos">
        <img
          src={projetos}
          alt="Imagem mostra projetos desenvolvidos em HTML, CSS, JavaScript, React e Figma"
        />
      </div>

      <a href="https://github.com/carolinedemoraes" className="btn">
        Ver Mais Projetos no Github
      </a>
    </section>
  );
};

export default ProjectsContainer;
