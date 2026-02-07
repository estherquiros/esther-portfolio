export const MainLayout = ({ children }) => {
  return (
    <>
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
    </>
  );
};
