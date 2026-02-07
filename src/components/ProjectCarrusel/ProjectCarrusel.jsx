import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectCarrusel.scss";
export const ProjectCarrusel = ({ projects }) => {
  return (
    <div className="projects-carousel">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};
