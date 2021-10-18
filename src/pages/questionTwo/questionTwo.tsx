import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import CircularProgress from "@material-ui/core/CircularProgress";

import { getCardDetails, Dog } from "./api";
import useStyles from "./styles";
import { useEffect } from "react";

const QuestionTwo = (): JSX.Element => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Dog | undefined>();

  const getRight = async (): Promise<void> => {
    try {
      setLoading(true);
      const x = await getCardDetails();
      setData(x);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRight();
  }, []);

  if (loading) {
    return (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={data?.imgSrc}
          title={data?.title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {data?.title}
          </Typography>
          <div
            className={classes.body}
            dangerouslySetInnerHTML={{ __html: data?.body || "" }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionTwo;
