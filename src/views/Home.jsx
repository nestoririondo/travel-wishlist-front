import { useNavigate, Outlet } from "react-router-dom";
import Toggle from "../components/Toggle";

const Home = () => {
  const navigate = useNavigate();

  const handleToggleChange = (newValue) => {
    navigate(`/${newValue}`);
  };

  return (
    <>
      <Toggle onChange={handleToggleChange} />
      <Outlet />
    </>
  );
};

export default Home;
