import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllRecipes from '../services/contentful';
import { loadRecipesAction } from '../store/actions';
import RecipeListItem from './RecipeListItem';

const RecipeList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllRecipes().then(({ items }) => {
      dispatch(loadRecipesAction(items));
    });
  }, [dispatch]);

  const recipes = useSelector(state => state.recipes);

  return (
    <div>
      {recipes.map(recipe => (
        <RecipeListItem key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
