import React from 'react';
import { Provider } from 'react-redux';
import RecipesDetailList from './components/RecipesDetailList';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RecipesDetailList />
    </Provider>
  );
}

export default App;
