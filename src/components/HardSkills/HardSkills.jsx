import "./HardSkills.scss";

export const HardSkills = ({ hardSkills }) => {
  const colors = ["#ffe793", "#debaf4", "#93a2fe", "#f6b1de"];

  const getColorByIndex = (index) => {
    return colors[index % colors.length];
  };

  return (
    <ul className="hard-skills">
      {hardSkills.map((skill, index) => (
        <li
          className="hard-skills__item"
          key={index}
          style={{ backgroundColor: getColorByIndex(index) }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
};
