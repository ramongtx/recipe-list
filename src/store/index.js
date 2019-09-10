import { createStore } from 'redux';
import { LOAD_RECIPES_TYPE, SELECT_RECIPE_TYPE } from './actions';

const INITIAL_STATE = {
  recipes: [],
};

function recipes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOAD_RECIPES_TYPE:
      return { ...state, recipes: action.payload };
    case SELECT_RECIPE_TYPE:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}

const store = createStore(recipes);
export default store;
