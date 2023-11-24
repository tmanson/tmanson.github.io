import photoUrl from "../assets/photo.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

Header.propTypes = {};

function Header() {
  return (
    <div className={"flex flex-1 items-end bg-gray-950 p-4 text-white"}>
      <img className="flex-none h-24 w-24 rounded-full" src={photoUrl} alt="" />
      <div className="flex flex-col pl-4 pb-3">
        <div className="text-3xl font-bold">Tomy MANSON</div>
        <div className="flex items-center text-gray-500 hover:text-gray-400 gap-1">
          <FontAwesomeIcon icon={faAt} />
          <a href="mailto:tomymanson@gmail.com" target="_blank" rel="noreferrer">
            tomymanson@gmail.com
          </a>
        </div>
        <div className="flex items-center text-gray-500 hover:text-gray-400 gap-1">
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
    </div>
  );
}

export default Header;
