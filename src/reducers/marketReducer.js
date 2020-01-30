import {
  GET_MARKETS,
  GET_MARKET,
  FILTER_MARKETS,
  SET_LOADING,
  MARKETS_ERROR
} from '../actions/types';

const initialState = {
  markets: null,
  market: null,
  filtered: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MARKETS:
      return {
        ...state,
        markets: action.payload,
        loading: false
      };
    case GET_MARKET:
      return {
        ...state,
        market: action.payload,
        loading: false
      };
    case FILTER_MARKETS:
      return {
        ...state,
        filtered: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case MARKETS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
