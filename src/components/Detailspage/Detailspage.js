import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoinsDetails } from "../../redux/homepage";
import "./detailpage.css";

const Detailspage = () => {
  const { id } = useParams();
  const { companyId } = useSelector((state) => state.allcoins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoinsDetails(id));
  }, []);
  console.log(id);
  if (companyId.image && companyId.market_data) {
    return (
      <div className="details-div">
        <img src={companyId.image.large} />

        <div>
          <table className="details my-3 trst-unstyled">
            <tr>
              <td>Coin-id:</td>
              <td>{companyId.id}</td>
            </tr>
            <tr>
              <td>Coingecko-rank:</td>
              <td>{companyId.coingecko_rank}</td>
            </tr>
            <tr>
              <td>Current USD Price:</td>
              <td>{companyId.market_data.current_price.usd}</td>
            </tr>
            <tr>
              <td>Coingecko score:</td>
              <td>{companyId.coingecko_score}</td>
            </tr>
            <tr>
              <td>quidity-Score:</td>
              {companyId.trquidity_score}
            </tr>
            <tr>
              <td>Hashing-Algorithm:</td>
              {companyId.hashing_algorithm}
            </tr>
            <tr>
              <td>Last-Update:</td>
              {companyId.last_updated}
            </tr>
          </table>
        </div>
      </div>
    );
  }
};

export default Detailspage;
