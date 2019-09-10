import React from 'react';

const RecipeListItem = ({ recipe }) => {
  return <span>{recipe.fields.title}</span>;
};

export default RecipeListItem;
