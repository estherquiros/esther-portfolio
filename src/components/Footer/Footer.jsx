import "./Footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top"></div>
      <div className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a href="#home" className="footer__nav-link link">
              Sobre mi
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="#about" className="footer__nav-link link">
              Portfolio
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="#skills" className="footer__nav-link link">
              Skills
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__title">
        <h2 className="footer__title-text font-title">Esther's Portfolio</h2>
      </div>
      <div className="footer__bottom"></div>
    </footer>
  );
};
