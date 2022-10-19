import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detailspage = () => {
  const coins = useSelector((state) => state.allcoins);
  console.log(coins);
  const dispatch = useDispatch();
  useEffect();
  return <div>Detailspage</div>;
};

export default Detailspage;
