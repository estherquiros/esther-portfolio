import "./SoftSkills.scss";

import cloudBlueLight from "../../images/cloud-blue-light.png";
import ovalGreen from "../../images/oval-green.png";
import squarePink from "../../images/square-pink.png";
import startYellow from "../../images/star-yellow.png";

export const SoftSkills = ({ softSkills }) => {
  const images = [startYellow, squarePink, cloudBlueLight, ovalGreen];

  const getImageByIndex = (index) => {
    return images[index % images.length];
  };

  return (
    <ul className="soft-skills">
      {softSkills.map((skill, index) => (
        <li
          className="soft-skills__item"
          key={index}
          style={{ backgroundImage: `url(${getImageByIndex(index)})` }}
        >
          <h3 className="soft-skills__item-title font-title">{skill.title}</h3>
          <p>{skill.description}</p>
        </li>
      ))}
    </ul>
  );
};
