import { HardSkills } from "../HardSkills/HardSkills";
import { SoftSkills } from "../SoftSkills/SoftSkills";
import "./SkillsSection.scss";

export const SkillsSection = ({ hardSkills, softSkills }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-section__header">
        <h2 className="skills-section__title font-title">Habilidades</h2>
        <p className="skills-section__description">
          Aquí puedes ver una lista de mis habilidades técnicas y blandas. Estas
          habilidades me permiten abordar proyectos de manera efectiva y
          colaborar con otros de manera eficiente.
        </p>
      </div>
      <div className="skills-section__content">
        <div className="skills-section__hard-skills">
          <h3 className="skills-section__subtitle font-subtitle font-title">
            Habilidades Técnicas
          </h3>
          <HardSkills hardSkills={hardSkills} />
        </div>
        <div className="skills-section__soft-skills">
          <h3 className="skills-section__subtitle font-subtitle font-title">
            Habilidades Blandas
          </h3>
          <SoftSkills softSkills={softSkills} />
        </div>
      </div>
    </section>
  );
};
