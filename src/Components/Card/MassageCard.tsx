import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Massage } from "../../Models/Massage";
import massagePicture from "../../Images/Massages/massage.jpg";
import bonCadeau from "../../Images/Massages/bonCadeau.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 345,
    marginBottom: "40px",
    height: 400,
  },
  media: {
    height: 240,
  },
  liens: {
    textDecoration: "none",
  },
});

interface MassageCardProps {
  massage?: Massage;
}
export default function MassageCard(props: MassageCardProps) {
  const classes = useStyles();
  const { massage } = props;

  return (
    <>
      <Link
        to={massage ? `/Massages/${massage?.nom}` : "/Offrir"}
        className={classes.liens}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={massage ? massagePicture : bonCadeau}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {massage ? massage.nom : "Bon cadeau"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {massage ? massage.resume : "Le bon cadeau qui plaît !"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
}
