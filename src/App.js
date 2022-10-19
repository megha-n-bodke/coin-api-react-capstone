import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Detailspage from "./components/Detailspage/Detailspage";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import { getConis } from "./redux/homepage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in useEffect");
    dispatch(getConis());
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<Detailspage />} />
      </Routes>
    </div>
  );
}

export default App;
