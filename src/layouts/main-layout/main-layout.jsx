import { TopHeader } from "../../components/top-header/TopHeader";
import "./main-layout.scss";

export const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* Cabecera superior */}
      <TopHeader />
      {/* Cabecera */}
      <header className="header">
        <h1 className="title">Plantilla React</h1>
      </header>
      {/* Contenido principal */}
      <main className="main">{children}</main>

      {/* Pie de página */}
      <footer className="footer">
        <p className="footer-text">Copyright 2024</p>
      </footer>
    </div>
  );
};
