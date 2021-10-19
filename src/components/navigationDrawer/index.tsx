import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Divider from "@material-ui/core/Divider";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const NavigationDrawer = ({
  toggleDrawer,
  open,
}: {
  toggleDrawer?: () => void;
  open?: boolean;
}): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  const handleCloseDrawer = (event: KeyboardEvent): void => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    open && toggleDrawer && toggleDrawer();
  };

  const handleButtonClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ): void => {
    handleCloseDrawer(
      event as KeyboardEvent & React.MouseEvent<HTMLDivElement, MouseEvent>
    );
    history.push(url);
  };

  return (
    <div>
      <Drawer open={open} onClose={handleCloseDrawer}>
        <div className={classes.list} role="presentation">
          <List>
            <ListItem button onClick={(e): void => handleButtonClick(e, "/")}>
              <ListItemAvatar>
                <Avatar>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Home" />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={(e): void => handleButtonClick(e, "questionOne")}
            >
              <ListItemAvatar>
                <Avatar>1</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Question One" secondary="Render bug" />
            </ListItem>
            <ListItem
              button
              onClick={(e): void => handleButtonClick(e, "questionTwo")}
            >
              <ListItemAvatar>
                <Avatar>2</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Question Two" secondary="Api Call" />
            </ListItem>
            <ListItem
              button
              onClick={(e): void => handleButtonClick(e, "questionThree")}
            >
              <ListItemAvatar>
                <Avatar>3</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Question Three"
                secondary="List on the fritz"
              />
            </ListItem>
            <ListItem
              button
              onClick={(e): void => handleButtonClick(e, "questionFour")}
            >
              <ListItemAvatar>
                <Avatar>4</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Question Four"
                secondary="Kobayashi Maru"
              />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};
export default NavigationDrawer;
