import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    height: '100%',
    minHeight: '400px',
  },
});

const RecipeDetails = () => {
  const recipe = useSelector(state => state.selected);
  const classes = useStyles();
  const chefName = recipe && recipe.fields.chef && ` by ${recipe.fields.chef.fields.name}`;

  return (
    <Card className={classes.card}>
      {recipe && (
        <>
          <CardHeader title={recipe.fields.title} subheader={chefName} />
          <CardMedia
            component="img"
            alt={recipe.fields.title}
            height="300"
            image={`https://${recipe.fields.photo.fields.file.url}`}
            title={recipe.fields.title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {recipe.fields.description}
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default RecipeDetails;
