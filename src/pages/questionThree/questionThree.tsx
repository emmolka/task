import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Paper from "@material-ui/core/Paper";

import Android from "@material-ui/icons/Android";
import Pets from "@material-ui/icons/Pets";
import BugReport from "@material-ui/icons/BugReport";

import QuestionListItem from "./questionListItem";
import { createRowData, Mock } from "./mocks";

const createMockData = (): Mock[] => {
  /* Please do not refactor this function */
  return [
    createRowData({
      species: "Robot",
      name: "T-100",
      icon: Android,
      description: "Likes long walks, walking over the bones of it's enemies",
    }),
    createRowData({
      species: "Bug",
      name: "Barry",
      icon: BugReport,
      description: "Likes long walks, and creating problems in all your code",
    }),
    createRowData({
      species: "Rabbit",
      name: "Roger",
      icon: Pets,
      description: "Likes long walks and getting to know the inner you",
    }),
    createRowData({ species: null, name: null, icon: null, description: null }),
  ];
};

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
}));

const QuestionThree = (): JSX.Element => {
  const classes = useStyles();
  const mockData = createMockData();
  return (
    <div className={classes.container}>
      <Paper>
        <List className={classes.root}>
          {mockData.map((item, i) => {
            return (
              <QuestionListItem
                item={item}
                key={item.id}
                divider={i !== mockData.length - 1}
              />
            );
          })}
        </List>
      </Paper>
    </div>
  );
};
export default QuestionThree;
