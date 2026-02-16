import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import "./ProjectCarrusel.scss";

export const ProjectCarrusel = ({ projects }) => {
  const scrollRef = useRef(null);

  // Convert vertical wheel scroll into horizontal scroll
  const handleWheel = (e) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Only hijack if there's room to scroll horizontally
    const atStart = scrollLeft <= 0 && e.deltaY < 0;
    const atEnd = scrollLeft + clientWidth >= scrollWidth - 1 && e.deltaY > 0;
    if (atStart || atEnd) return;

    e.preventDefault();
    container.scrollLeft += e.deltaY;
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = 360; // card 340 + gap 20
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="projects-carousel-wrapper">
      <button
        className="carousel-arrow carousel-arrow--left"
        onClick={() => scroll("left")}
        aria-label="Previous project"
      >
        <FiChevronLeft />
      </button>

      <div
        className="projects-carousel"
        ref={scrollRef}
        onWheel={handleWheel}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <button
        className="carousel-arrow carousel-arrow--right"
        onClick={() => scroll("right")}
        aria-label="Next project"
      >
        <FiChevronRight />
      </button>
    </div>
  );
};
