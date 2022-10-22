import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MenuPage from "./pages/Menu";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />}></Route>
      <Route exact path="/menu" element={<MenuPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
