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
          Estos son algunos de los proyectos que he desarrollado durante mi
          formación y aprendizaje continuo ✨ Cada uno representa un reto
          diferente, una oportunidad para experimentar con nuevas tecnologías y
          seguir creciendo paso a paso como desarrolladora 🌸 Porque para mí,
          cada proyecto es una nueva forma de aprender, crear y mejorar.
        </p>
      </div>
      <ProjectCarrusel projects={projects} />
    </section>
  );
};
