import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  INPUT_CHANGE,
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAIL,
  EDIT_SMURF,
  DELETE_DATA_START,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAIL
} from '../types';

const initialState = {
  data: [],
  errors: {},
  loading: false,
  smurfForm: {
    name: '',
    age: '',
    height: ''
  },
  isEditing: false,
  editingId: null
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
    case POST_DATA_START:
      return {
        ...state,
        loading: true,
        error: {}
      };

    case POST_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        smurfForm: {
          name: '',
          age: '',
          height: ''
        },
        isEditing: false
      };

    case POST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        smurfForm: {
          name: '',
          age: '',
          height: ''
        },
        isEditing: false
      };
    case DELETE_DATA_START:
      return {
        ...state,
        loading: true,
        error: {}
      };

    case DELETE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case DELETE_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case INPUT_CHANGE:
      return {
        ...state,
        smurfForm: {
          ...state.smurfForm,
          [action.payload.name]: action.payload.value
        }
      };

    case EDIT_SMURF:
      return {
        ...state,
        smurfForm: {
          name: action.payload.name,
          age: action.payload.age,
          height: action.payload.height
        },
        editingId: action.payload.id,
        isEditing: true
      };

    default:
      return state;
  }
};

export default smurfReducer;
