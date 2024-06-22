// searchReducer.js

// Başlangıç durumu (initialState)
const initialState = {
  searchTerm: '',
  searchResults: [],
};

// Reducer fonksiyonu
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      };
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
