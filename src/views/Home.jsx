import CountryTabs from "../components/CountryTabs";
import StudentTabs from "../components/StudentTabs";
import { Routes, Route } from "react-router-dom";

const Home = () => {

  return (
    <>
      <Routes>
        <Route path="/countries" element={<CountryTabs />} />
        <Route path="/students" element={<StudentTabs />} />
      </Routes>
    </>
  );
};

export default Home;
