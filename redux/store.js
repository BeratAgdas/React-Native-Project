// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import episodeReducer from './slices/episodeSlice';

export const store = configureStore({
    reducer: {
        episodes: episodeReducer,
    },
});
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';

const store = createStore(rootReducer);

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
