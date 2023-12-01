import "./App.css";
import Header from "./components/Header.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
      <div className="flex flex-col p-0 h-screen">
        <Header />
        <div className="flex flex-1 h-full bg-gray-50">
         <Outlet/>
        </div>
      </div>
  );
}

export default App;
