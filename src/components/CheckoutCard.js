import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import accounting from 'accounting';
import DeleteIcon from '@material-ui/icons/Delete';
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  cardRating: {
    display: "flex",
  },
}));

export default function CheckoutCard({item: {id, name, productType, image, price, rating, description}}) {
  const classes = useStyles();
  const [ , dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price, "CLP ")}{/* se coloca el monto y luego el tipo de cambio */}
          </Typography>
        }
        title={name}
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardActions disableSpacing className={classes.cardActions}>
      <div className={ classes.cardRating}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>&#11088;</p>
          ))}
      </div>
      <IconButton>
        <DeleteIcon fontSize="large" onClick={removeItem}/>
      </IconButton>
      </CardActions>
    </Card>
  );
}
