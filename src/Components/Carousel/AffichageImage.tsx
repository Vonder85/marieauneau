import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  img: {
    height: 400,
    display: "block",
    overflow: "hidden",
    maxWidth: "100%",
    marginRight: "auto",
    marginLeft: "auto",
  },
});

interface AffichageImageProps {
  image: firebase.storage.Reference;
}
export const AffichageImage = (props: AffichageImageProps) => {
  const { image } = props;

  const classes = useStyles();
  const [url, setUrl] = useState("");

  useEffect(() => {
    image.getDownloadURL().then((res) => {
      setUrl(res);
    });
  }, [image]);

  return (
    <>
      <img className={classes.img} src={url} alt={image.fullPath} />
    </>
  );
};
