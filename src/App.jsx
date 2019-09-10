import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <RecipeList />
    </Provider>
  );
}

export default App;
