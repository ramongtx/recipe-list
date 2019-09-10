import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import getAllRecipes from '../services/contentful';
import { loadRecipesAction } from '../store/actions';

const RecipesDetailList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllRecipes().then(({ items }) => {
      dispatch(loadRecipesAction(items));
    });
  }, [dispatch]);

  const recipes = useSelector(state => state.recipes);
  return (
    <>
      {recipes && recipes.length ? (
        <Grid container spacing={1}>
          <Grid item sm={5} xs={12}>
            <RecipeList />
          </Grid>
          <Grid item sm={7} xs={12}>
            <RecipeDetails />
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default RecipesDetailList;
