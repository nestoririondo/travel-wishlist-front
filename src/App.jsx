import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Countries from "./views/Countries";
import Students from "./views/Students";
import { useNavigate } from "react-router-dom";
import Toggle from "./components/Toggle";

function App() {
  const navigate = useNavigate();

  const handleToggleChange = (newValue) => {
    navigate(`/${newValue}`);
  };

  return (
    <>
      <Toggle onChange={handleToggleChange} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </>
  );
}

export default App;
