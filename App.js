import React from 'react';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import HomeScreen from './src/HomeScreen';
const App = () => {
  return (
    <Provider store={store()}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
