import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="link" href="#aboutme">
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
        <h1 className="header__title">Esther Portfolio</h1>
        <ul className="header__links">
          <li>
            <a href="about">About me</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
