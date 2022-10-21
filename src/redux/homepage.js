import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GETCOINS = 'GETCOINS';
// const GETCOINSDETAILS = 'GETCOINSDETAILS';
const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
// const coindetailsUrl = 'https://api.coingecko.com/api/v3/coins';

// Action creator
export const getConis = createAsyncThunk(
  GETCOINS,
  async (args, { dispatch }) => {
    const { data } = await axios.get(baseUrl);
    console.log('in action');
    console.log(data);

    dispatch({
      type: GETCOINS,
      payload: data,
    });
  },
);

// reducer
const initialstate = { coins: [] };
const coinData = (state = initialstate, action) => {
  switch (action.type) {
    case GETCOINS:
      return {
        ...state,
        coins: action.payload,
        // coins is from initial state
      };

    default:
      return state;
  }
};

export default coinData;
