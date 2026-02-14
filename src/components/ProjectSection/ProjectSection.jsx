import { ProjectCarrusel } from "../ProjectCarrusel/ProjectCarrusel";
import "./ProjectSection.scss";

export const ProjectSection = ({ projects }) => {
  return (
    <section id="portfolio" className="project-section">
      <div className="project-section__header">
        <h2 className="project-section__title font-title">
          Proyectos Destacados
        </h2>
        <p className="project-section__description">
          Aquí encontrarás algunos de mis proyectos más destacados.
        </p>
      </div>
      <ProjectCarrusel projects={projects} />
    </section>
  );
};
