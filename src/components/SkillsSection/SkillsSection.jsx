import { HardSkills } from "../HardSkills/HardSkills";
import { SoftSkills } from "../SoftSkills/SoftSkills";
import "./SkillsSection.scss";

export const SkillsSection = ({ hardSkills, softSkills }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-section__header">
        <h2 className="skills-section__title font-title">Habilidades</h2>
        <p className="skills-section__description">
          "Como desarrolladora, estas son las herramientas y habilidades que me
          acompañan cada día 💖 Gracias a ellas convierto ideas en proyectos
          tangibles, resuelvo retos con creatividad y trabajo con entusiasmo
          ⭐🌷"
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
