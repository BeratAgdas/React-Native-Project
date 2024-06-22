import { SET_PAGE } from './actionTypes';

const initialState = {
  currentPage: 1,
  totalPages: 10, // Örnek bir değer
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
