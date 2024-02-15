import CountryTabs from "../components/CountryTabs";
import StudentTabs from "../components/StudentTabs";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Toggle from "../components/Toggle";
import SignUp from "./SignUp";
import Login from "./Login";

const Home = () => {
  const navigate = useNavigate();

  const handleToggleChange = (newValue) => {
    navigate(`/${newValue}`);
  };

  return (
    <>
      <Toggle onChange={handleToggleChange} />
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/countries" element={<CountryTabs />} />
        <Route path="/students" element={<StudentTabs />} />
      </Routes>
    </>
  );
};

export default Home;
