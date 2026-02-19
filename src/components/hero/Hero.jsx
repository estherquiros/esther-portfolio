import "./Hero.scss";
import heroImage from "../../images/me.jpg";
export const Hero = () => {
  return (
    <section id="about-me" className="hero">
      <div
        className="hero__image"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="hero__content">
        <h1 className="hero__title font-title">Soy Esther</h1>
        <p className="hero__description">
          Desarrolladora web full stack, enfocada en seguir creciendo
          profesionalmente y ampliando mis conocimientos en tecnologías
          modernas.
        </p>
        <p className="hero__description">
          Mi historia es poco típica, fui{" "}
          <a
            href="https://estherquiros.es"
            target="__blank"
            className="link link--static"
          >
            logopeda autónoma
          </a>{" "}
          y en 2025 di el salto al desarrollo web a través de un bootcamp, me
          enganché al proceso de crear: curiosidad, constancia y aprender cada
          día.
        </p>
        <p className="hero__description">
          Ahora sigo formándome y creando proyectos para poner en práctica lo
          aprendido, probar nuevas tecnologías y crecer paso a paso. Me encanta
          construir desde cero y ver una idea convertirse en algo real que
          funciona.
        </p>
        <p className="hero__description">
          Gracias a mi trayectoria anterior aporto empatía, paciencia y trato:
          también están en mi forma de colaborar y comunicarme con el equipo.
        </p>
      </div>
    </section>
  );
};
