import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { selectRecipeAction } from '../store/actions';

const useStyles = makeStyles({
  card: {
    borderRadius: 0,
  },
});

const RecipeListItem = ({ recipe }) => {
  const classes = useStyles();
  const { title } = recipe.fields;
  const photoUrl = `https://${recipe.fields.photo.fields.file.url}`;
  const chefName = recipe.fields.chef && ` by ${recipe.fields.chef.fields.name}`;
  const dispatch = useDispatch();
  const selectRecipeFn = () => {
    dispatch(selectRecipeAction(recipe));
  };

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={selectRecipeFn}>
        <CardHeader
          className={classes.avatar}
          avatar={<Avatar src={photoUrl} />}
          title={title}
          subheader={chefName}
        />
      </CardActionArea>
    </Card>
  );
};

export default RecipeListItem;
