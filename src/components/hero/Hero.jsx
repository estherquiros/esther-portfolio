import "./hero.scss";
import heroImage from "../../images/me.jpg";
export const Hero = () => {
  return (
    <section className="hero">
      <div
        className="hero__image"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="hero__content">
        <h2 className="hero__title">¡Hola! Soy Esther, desarrolladora web.</h2>
        <p className="hero__description">
          Me apasiona crear experiencias digitales atractivas y funcionales.
          Bienvenido a mi portfolio, donde podrás conocer mis proyectos y
          habilidades.
        </p>
      </div>
    </section>
  );
};
