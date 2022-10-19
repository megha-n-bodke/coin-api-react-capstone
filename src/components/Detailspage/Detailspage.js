import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoinsDetails } from "../../redux/homepage";

const Detailspage = () => {
  const { id } = useParams();
  console.log(id);
  const { companyId } = useSelector((state) => state.allcoins);
  // console.log(companyId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoinsDetails(id));
  }, []);
  console.log(id);
  return <div>{companyId.symbol}</div>;
};

export default Detailspage;
