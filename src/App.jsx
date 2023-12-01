import "./App.css";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
      <div className="flex p-0">
        <Header />
        <div>
          WIP
          {/*<Experiences />*/}
          {/*<Hobbies />*/}
          {/*<Education />*/}
         <Outlet/>
        </div>
      </div>
  );
}

export default App;
