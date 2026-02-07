import "./top-header.scss";

export const TopHeader = () => {
  return (
    <marquee className="top-header">
      <div className="top-header__content">
        {[...Array(10)].map((_, index) => (
          <span className="top-header__item" key={index}>
            ✨ OPEN FOR OPPORTUNITIES ✨
          </span>
        ))}
      </div>
    </marquee>
  );
};
