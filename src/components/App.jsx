import { MainLayout } from "../layouts/main-layout/main-layout";
import "../styles/App.scss";
import { Hero } from "./hero/Hero";

function App() {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
}

export default App;
