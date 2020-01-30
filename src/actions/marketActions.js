import axios from 'axios';
import zipcodes from 'zipcodes';

import {
  GET_MARKETS,
  GET_MARKET,
  FILTER_MARKETS,
  SET_LOADING,
  MARKETS_ERROR
} from './types';

export const getMarkets = (zip, radius) => async dispatch => {
  try {
    setLoading();
    if (+radius !== 0) {
      // get all zipcodes within radius then map them to an array of api call strings for each zip
      const apiURLs = zipcodes
        .radius(zip, +radius)
        .map(
          zipcode => `http://data.ny.gov/resource/qq4h-8p86.json?zip=${zipcode}`
        );

      axios.all(apiURLs.map(apiURL => axios.get(apiURL))).then(
        axios.spread(function(...res) {
          // flatten array to one array will all farms
          var data = [].concat(...res.map(x => x.data));

          dispatch({
            type: GET_MARKETS,
            payload: data
          });
        })
      );
    } else {
      const res = await axios.get(
        `http://data.ny.gov/resource/qq4h-8p86.json?zip=${zip}`
      );

      dispatch({
        type: GET_MARKETS,
        payload: res.data
      });
    }
  } catch (err) {
    dispatch({
      type: MARKETS_ERROR,
      payload: err.response
    });
  }
};

// Get market info
export const getMarket = marketName => async dispatch => {
  try {
    setLoading();

    const res = await axios.get(
      `http://data.ny.gov/resource/qq4h-8p86.json?market_name=${marketName}`
    );
    dispatch({
      type: GET_MARKET,
      payload: res.data[0]
    });
  } catch (err) {
    dispatch({
      type: MARKETS_ERROR,
      payload: err.response
    });
  }
};

export const filterMarkets = (markets, filters) => async dispatch => {
  try {
    setLoading();

    var data;

    if (filters.length === 0) {
      data = markets;
    } else {
      data = markets;
      for (let filter of filters) {
        data = data.filter(market => market[filter] === 'Y');
      }
    }

    dispatch({ type: FILTER_MARKETS, payload: data });
  } catch (err) {
    dispatch({
      type: MARKETS_ERROR,
      payload: err.response
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};