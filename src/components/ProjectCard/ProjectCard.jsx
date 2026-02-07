import "./ProjectCard.scss";
export const ProjectCard = ({ title, techs, imageUrl, projectUrl }) => {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <div className="project-card__techs">
          {techs.map((tech, index) => (
            <span key={index} className="project-card__tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};
