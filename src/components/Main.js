import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Specials from "./Specials";
import Chicago from "./Chicago";

const Main = () => {
  return (
    // Routes the Nav components to the appropriate section/page
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/menu" element={<Specials />}></Route>
      <Route path="/about" element={<Chicago />}></Route>
    </Routes>
  );
};

export default Main;
