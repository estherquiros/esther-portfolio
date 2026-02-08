import "./HardSkills.scss";

export const HardSkills = ({ hardSkills }) => {
  return (
    <ul>
      {hardSkills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};
