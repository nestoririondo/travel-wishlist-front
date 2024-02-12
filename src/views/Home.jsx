import CountryTabs from "../components/CountryTabs";
import StudentsTabs from "../components/StudentsTabs";
import { Routes, Route } from "react-router-dom";

const Home = () => {

  return (
    <>
      <Routes>
        <Route path="/countries" element={<CountryTabs />} />
        <Route path="/students" element={<StudentsTabs />} />
      </Routes>
    </>
  );
};

export default Home;
