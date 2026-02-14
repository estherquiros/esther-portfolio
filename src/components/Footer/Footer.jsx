import "./Footer.scss";
import {
  PiGithubLogoLight,
  PiSmileyLight,
  PiLinkedinLogoLight,
} from "react-icons/pi";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top"></div>
      <div className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item">
            <a href="#about-me" className="footer__nav-link link">
              Sobre mi
            </a>
          </li>
          <li className="footer__nav-item">
            <a href="#portfolio" className="footer__nav-link link">
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
      <div className="footer__bottom">
        <div className="footer__social">
          <ul className="footer__links">
            <li>
              <a className="link" href="mailto:estherbequiros@gmail.com">
                <PiSmileyLight size={30} />
              </a>
            </li>
            <li>
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/estherquiros"
              >
                <PiGithubLogoLight size={30} />
              </a>
            </li>
            <li>
              <a
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/esther-quir%C3%B3s/"
              >
                <PiLinkedinLogoLight size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Hecho con mezcla de azúcar, especias y muchas cosas bonitas 🦄</p>
        <p>
          Inspirado en{" "}
          <a
            className="footer__copyright-link link"
            href="https://www.heygirlstudio.co.uk/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Hey Girl Studio
          </a>
        </p>
      </div>
    </footer>
  );
};
