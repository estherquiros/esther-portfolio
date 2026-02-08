import { MainLayout } from "../layouts/main-layout/main-layout";
import "../styles/App.scss";
import { Hero } from "./hero/Hero";
import { ProjectCarrusel } from "./ProjectCarrusel/ProjectCarrusel";
import { projects } from "./../data/project";
import { ProjectSection } from "./ProjectSection/ProjectSection";
import { SkillsSection } from "./SkillsSection/SkillsSection";
import { SoftSkills } from "../data/SoftSkills";
import { HardSkills } from "../data/HardSkills";

function App() {
  return (
    <MainLayout>
      <Hero />
      <ProjectSection projects={projects} />
      <SkillsSection softSkills={SoftSkills} hardSkills={HardSkills} />
    </MainLayout>
  );
}

export default App;
