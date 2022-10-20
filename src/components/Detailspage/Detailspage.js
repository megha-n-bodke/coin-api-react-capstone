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
          <table>
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
              <td>Lquidity-Score:</td>
              {companyId.liquidity_score}
            </tr>
            <tr>
              <td>Public Interest Score:</td>
              {companyId.public_interest_score}
            </tr>
            <tr>
              <td>Last-Update:</td>
              <td> {companyId.last_updated}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
};

export default Detailspage;
