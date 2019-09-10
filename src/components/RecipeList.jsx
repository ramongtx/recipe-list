import React from 'react';
import { useSelector } from 'react-redux';
import RecipeListItem from './RecipeListItem';

const RecipeList = () => {
  const recipes = useSelector(state => state.recipes);

  return (
    <>
      {recipes.map(recipe => (
        <RecipeListItem key={recipe.sys.id} recipe={recipe} />
      ))}
    </>
  );
};

export default RecipeList;
