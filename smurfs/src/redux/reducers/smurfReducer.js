import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  SET_DATE
} from '../types';

const initialState = {
  data: {},
  errors: {},
  loading: false
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        loading: true,
        error: {}
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case FETCH_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default smurfReducer;
