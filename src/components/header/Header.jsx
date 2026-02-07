import "./Header.scss";
import {
  PiGithubLogoLight,
  PiSmileyLight,
  PiLinkedinLogoLight,
} from "react-icons/pi";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="link" href="#about-me">
                Sobre mi
              </a>
            </li>
            <li className="header__nav-item">
              <a className="link" href="#porfolio">
                Porfolio
              </a>
            </li>
            <li className="header__nav-item">
              <a className="link" href="#skills">
                skills
              </a>
            </li>
          </ul>
        </nav>
        <h1 className="header__title font-title">Esther's Portfolio</h1>
        <ul className="header__links">
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
    </header>
  );
};
