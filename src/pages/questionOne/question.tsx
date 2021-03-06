import React from "react";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";
import Solution from "./images/solution.png";

const question = (): JSX.Element => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Question One
      </Typography>
      <Typography variant="h5" gutterBottom>
        Render Bug
      </Typography>
      <Typography variant="body1" gutterBottom>
        This task revolves around a bug in the render method of a basic
        component.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your task if you choose to accept it, is to resolve this bug (displayed
        on the right and in the console) .
      </Typography>
      <Typography variant="body1" gutterBottom>
        As with all the questions in this tech test, you may or may not wish to
        refactor some of the code.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Below is what the final solution should look like.
      </Typography>
      <CardMedia
        image={Solution}
        style={{
          width: "100%",
          height: 100,
          backgroundSize: "contain",
        }}
        title="The Solution"
      />
    </div>
  );
};

export default question;
