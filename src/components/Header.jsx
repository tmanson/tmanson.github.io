import photoUrl from "../assets/photo.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

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
      <div className="flex flex-1 justify-center mt-4 lg:mt-0 lg:justify-end gap-4 text-xl lg:text-2xl text-">
        <Link className="hover:underline" to="/">Presentation</Link>
        <Link className="hover:underline" to="/experiences">Expériences</Link>
        <Link className="hover:underline" to="/hobbies">Hobbies</Link>
        <Link className="hover:underline" to="/education">Education</Link>
      </div>
    </div>
  );
}

export default Header;
