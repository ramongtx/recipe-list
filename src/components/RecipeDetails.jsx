import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    height: '100%',
    minHeight: '400px',
  },
  emptyContent: {
    height: '100%',
  },
});

const RecipeDetails = () => {
  const recipe = useSelector(state => state.selected);
  const classes = useStyles();
  const chefName = recipe && recipe.fields.chef && ` by ${recipe.fields.chef.fields.name}`;
  const chips =
    recipe &&
    recipe.fields.tags &&
    recipe.fields.tags.map(({ fields }) => {
      return <Chip size="small" key={fields.name} color="primary" label={fields.name} />;
    });

  return (
    <Card className={classes.card}>
      {recipe ? (
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
            <ReactMarkdown source={recipe.fields.description} />
            {chips}
          </CardContent>
        </>
      ) : (
        <CardContent className={classes.emptyContent}>
          <Grid
            className={classes.emptyContent}
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item>
              <Typography variant="body2" color="textSecondary" component="p">
                Select a recipe from the list to check more details
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      )}
    </Card>
  );
};

export default RecipeDetails;
