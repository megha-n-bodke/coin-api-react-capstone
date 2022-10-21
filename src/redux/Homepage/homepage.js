import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GETCOINS = 'GETCOINS';
const GETCOINSDETAILS = 'GETCOINSDETAILS';
const baseUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';
const coindetailsUrl = 'https://api.coingecko.com/api/v3/coins';

// Action creator
export const getConis = createAsyncThunk(
  GETCOINS,
  async (args, { dispatch }) => {
    const { data } = await axios.get(baseUrl);

    dispatch({
      type: GETCOINS,
      payload: data,
    });
  },
);

// action for coin details by id
export const getCoinsDetails = createAsyncThunk(
  GETCOINSDETAILS,
  async (id, { dispatch }) => {
    const { data } = await axios.get(`${coindetailsUrl}/${id}`);

    dispatch({
      type: GETCOINSDETAILS,
      payload: data,
    });
  },
);

// reducer
const initialstate = { coins: [], companyId: {} };
const coinData = (state = initialstate, action) => {
  switch (action.type) {
    case GETCOINS:
      return {
        ...state,
        coins: action.payload,
        // coins is from initial state
      };

    case GETCOINSDETAILS: {
      console.log('this is details action');
      console.log(action.paylod);
      return {
        ...state,
        companyId: action.payload,
      };
    }
    default:
      return state;
  }
};

export default coinData;
