import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
      <Homepage />
    </div>
  );
}

export default App;
