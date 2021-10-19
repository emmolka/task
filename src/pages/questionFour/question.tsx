import React from "react";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import kobayashiMaru from "./images/kobayashiMaru.jpg";

const question = (): JSX.Element => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Question Four
      </Typography>
      <Typography variant="h5" gutterBottom>
        Kobayashi Maru
      </Typography>
      <Typography variant="body1" gutterBottom>
        You are going to see a list of fruits. Sorting button should sort them
        by descending or ascending alphabetical order. As with all the questions
        in this tech test, you may or may not wish to refactor some of the code.
        :P Good luck :)
      </Typography>
      <CardMedia
        image={kobayashiMaru}
        style={{
          width: "100%",
          height: 500,
          backgroundSize: "contain",
        }}
        title="The Solution"
      />
    </div>
  );
};

export default question;
