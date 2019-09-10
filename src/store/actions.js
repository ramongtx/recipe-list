export const LOAD_RECIPES_TYPE = 'LOAD_RECIPES';
export const SELECT_RECIPE_TYPE = 'LOAD_RECIPES';

export function loadRecipesAction(recipes) {
  return {
    type: LOAD_RECIPES_TYPE,
    payload: recipes,
  };
}

export function selectRecipeAction(recipe) {
  return {
    type: SELECT_RECIPE_TYPE,
    payload: recipe,
  };
}
