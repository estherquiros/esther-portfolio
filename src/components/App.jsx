import { MainLayout } from "../layouts/main-layout/main-layout";
import "../styles/App.scss";
import { Hero } from "./hero/Hero";
import { ProjectCarrusel } from "./ProjectCarrusel/ProjectCarrusel";
import { projects } from "./../data/project";
import { ProjectSection } from "./ProjectSection/ProjectSection";

function App() {
  return (
    <MainLayout>
      <Hero />
      <ProjectSection projects={projects} />
    </MainLayout>
  );
}

export default App;
