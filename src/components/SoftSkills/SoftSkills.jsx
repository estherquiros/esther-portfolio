import "./SoftSkills.scss";
export const SoftSkills = ({ softSkills }) => {
  return (
    <ul>
      {softSkills.map((skill, index) => (
        <li key={index}>
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </li>
      ))}
    </ul>
  );
};
