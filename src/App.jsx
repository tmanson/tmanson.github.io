import "./App.css";
import Header from "./components/Header.jsx";
import Experiences from "./components/Experiences.jsx";
import Hobbies from "./components/Hobbies.jsx";
import Education from "./components/Education.jsx";

function App() {
  return (
    <>
      <Header />
      <div>
        <Experiences />
        <Hobbies />
        <Education />
      </div>
    </>
  );
}

export default App;
