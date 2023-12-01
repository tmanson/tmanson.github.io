import photoUrl from "../assets/photo.jpeg";
import { Link } from "react-router-dom";
import { SocialLinks } from "./SocialLinks.jsx";

Header.propTypes = {};

function Header() {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-500 p-4 lg:pl-6 lg:pr-6 text-gray-50 shadow-lg shadow-gray-400 z-10">
      <div className="flex flex-row-reverse lg:flex-row justify-between">
        <img
          className="flex-none h-20 lg:h-24 w-20 lg:w-24 rounded-full shadow-md shadow-black/5 dark:shadow-black/30"
          src={photoUrl}
          alt="Photo de Tomy MANSON"
        />
        <div className="flex flex-col lg:pl-4 lg:pb-3">
          <div className="text-3xl font-bold ">Tomy MANSON</div>
          <SocialLinks />
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
