// App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'; // Redux store'u import et
import Root from './Root'; // Redux store'u bağlamak için oluşturduğumuz Root bileşeni

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
