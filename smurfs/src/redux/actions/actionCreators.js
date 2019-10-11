import axios from '../../utils/axios';
import store from '../store';
import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAIL,
  INPUT_CHANGE,
  EDIT_SMURF
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

export const addSmurf = () => dispatch => {
  dispatch({ type: POST_DATA_START });
  if (!store.getState().smurfs.isEditing) {
    axios
      .post('/smurfs', { ...store.getState().smurfs.smurfForm })
      .then(res => {
        dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POST_DATA_FAIL, payload: err });
      });
  } else {
    axios
      .put(`/smurfs/${store.getState().smurfs.editingId}`, {
        ...store.getState().smurfs.smurfForm
      })
      .then(res => {
        dispatch({ type: POST_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: POST_DATA_FAIL, payload: err });
      });
  }
};

export const editSmurf = id => {
  const currentSmurf = store
    .getState()
    .smurfs.data.find(smurf => smurf.id === id);
  return {
    type: EDIT_SMURF,
    payload: currentSmurf
  };
};

export const formInputChange = (name, value) => {
  return {
    type: INPUT_CHANGE,
    payload: {
      name,
      value
    }
  };
};
