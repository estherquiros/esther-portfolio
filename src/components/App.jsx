import { MainLayout } from "../layouts/main-layout/main-layout";
import "../styles/App.scss";
import { Hero } from "./hero/Hero";
import { ProjectCarrusel } from "./ProjectCarrusel/ProjectCarrusel";
import { projects } from "./../data/project";

function App() {
  return (
    <MainLayout>
      <Hero />
      <ProjectCarrusel projects={projects} />
    </MainLayout>
  );
}

export default App;
