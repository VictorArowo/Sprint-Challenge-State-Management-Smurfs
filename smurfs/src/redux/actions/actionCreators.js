import axios from '../../utils/axios';
import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL
} from '../types';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });

  axios
    .get('/smurfs')
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_DATA_FAIL, payload: err });
    });
};
