import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { createStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { HeaderDrawerActions } from "../containers/headerDrawerContainer";
import { HeaderDrawerState } from "../reducers/headerDrawerReducer";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "100%",
      zIndex: 1,
      overflow: "hidden",
      position: "relative",
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    },
    drawerPaper: {
      position: "fixed",
      width: 240
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0,
      paddingLeft: 240
    },
    toolbar: theme.mixins.toolbar,
    ListItemTextSelected: {
      color: theme.palette.text.primary
    }
  });

export interface OwnProps extends RouteComponentProps<{}>, React.Props<{}> {}

export type HeaderDrawerProps = OwnProps &
  HeaderDrawerState &
  HeaderDrawerActions &
  WithStyles<typeof styles>;

export const headerDrawerComponent: React.SFC<HeaderDrawerProps> = (
  props: HeaderDrawerProps
) => {
  return (
    <div className={props.classes.root}>
      <AppBar position="fixed" className={props.classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap={true}>
            React サンプル
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: props.classes.drawerPaper
        }}
      >
        <div className={props.classes.toolbar} />
        <List>
          <ListItem
            button={true}
            onClick={event => {
              props.selectContents(0);
              props.pushRoot();
            }}
          >
            <Typography
              variant="subheading"
              color={props.selectedIndex === 0 ? "primary" : "inherit"}
              noWrap={true}
            >
              TOP
            </Typography>
          </ListItem>
          <ListItem
            button={true}
            onClick={event => {
              props.selectContents(1);
              props.pushRegister();
            }}
          >
            <Typography
              variant="subheading"
              color={props.selectedIndex === 1 ? "primary" : "inherit"}
              noWrap={true}
            >
              フォームサンプル
            </Typography>
          </ListItem>
        </List>
      </Drawer>
      <main className={props.classes.content}>
        <div className={props.classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};
