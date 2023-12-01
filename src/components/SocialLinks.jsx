import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const SocialLinks = () => (
  <div className=" text-gray-200 ">
    <div className="flex items-center gap-1 hover:text-gray-100">
      <FontAwesomeIcon icon={faAt} />
      <a href="mailto:tomymanson@gmail.com" target="_blank" rel="noreferrer">
        tomymanson@gmail.com
      </a>
    </div>
    <div className="flex items-center gap-1 hover:text-gray-100">
      <FontAwesomeIcon icon={faLinkedin} />
      <a
        href="https://www.linkedin.com/in/tomy-manson/"
        target="_blank"
        rel="noreferrer"
      >
        https://www.linkedin.com/in/tomy-manson/
      </a>
    </div>
  </div>
);
