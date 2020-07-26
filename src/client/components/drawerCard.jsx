/**
 * ************************************
 *
 * @module  DrawerCard
 * @author  Red-Lipped Batfish
 * @date
 * @description functional component that renders one card in the sidebar comp
 *
 * ************************************
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// additional styles added to makeStyle hook
const useStyles = makeStyles({
  root: {
    minWidth: 250,
    border: 3,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DrawerCard = (props) => {
  const classes = useStyles();

  // props for each project object
  const { type, name, description } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {type=== 'new' ? <Fab color="primary" aria-label="add"><AddIcon /></Fab> : null}
        {name}
        </Typography>
        {description}
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}

export default DrawerCard;