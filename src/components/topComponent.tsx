import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { createStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TopActions } from "../containers/topContainer";
import { TopState } from "../reducers/topReducer";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    formControl: {
      minWidth: "100%"
    },
    typographyHeadline: {
      margin: theme.spacing.unit
    },
    typographySubheading: {
      margin: theme.spacing.unit,
      marginLeft: theme.spacing.unit * 2
    },
    paper: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      overflowX: "auto"
    },
    table: {
      minWidth: 400
    }
  });

export interface OwnProps extends RouteComponentProps<{}>, React.Props<{}> {}

export type TopProps = OwnProps &
  TopState &
  TopActions &
  WithStyles<typeof styles>;

export const topComponent: React.SFC<TopProps> = (props: TopProps) => {
  return (
    <div className={props.classes.root}>
      <Typography
        variant="headline"
        className={props.classes.typographyHeadline}
      >
        Top
      </Typography>
      <br />
      <Typography
        variant="subheading"
        className={props.classes.typographySubheading}
      >
        React+Reduxのサンプル
      </Typography>
      <Grid container={true} justify="center">
        <Grid item={true} xs={11}>
          <Grid container={true} justify="flex-start">
            <Grid item={true} xs={4}>
              <TextField
                label="入力してください"
                onChange={e => props.updateText(e.target.value)}
                fullWidth={true}
              />
            </Grid>
          </Grid>
          <br />
          <Grid container={true} justify="flex-start">
            <Grid item={true} xs={4}>
              <TextField
                label="こちらに反映されます"
                value={props.text}
                inputProps={{
                  readOnly: true
                }}
                fullWidth={true}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Typography
        variant="subheading"
        className={props.classes.typographySubheading}
      >
        利用ライブラリ
      </Typography>
      <Grid container={true} justify="center">
        <Grid item={true} xs={11}>
          <Grid container={true} justify="flex-start">
            <Grid item={true} xs={12}>
              <Paper className={props.classes.paper}>
                <Table className={props.classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>ライブラリ名</TableCell>
                      <TableCell>概要</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={0}>
                      <TableCell component="th" scope="row">
                        <a href="https://reactjs.org/" target="_blank">
                          React
                        </a>
                      </TableCell>
                      <TableCell>
                        Javascript+HTMLタグでUIパーツを作るライブラリです。パーツを組み合わせて一つのWebアプリを作ります。
                      </TableCell>
                    </TableRow>
                    <TableRow key={1}>
                      <TableCell component="th" scope="row">
                        <a href="https://redux.js.org/" target="_blank">
                          Redux
                        </a>
                      </TableCell>
                      <TableCell>
                        Webアプリの状態を一箇所に管理するためのライブラリです。Reduxの持つ状態を書き換えると、自動的にUIパーツが書き換わります。
                      </TableCell>
                    </TableRow>
                    <TableRow key={2}>
                      <TableCell component="th" scope="row">
                        <a
                          href="https://reacttraining.com/react-router/web/guides/philosophy"
                          target="_blank"
                        >
                          React Router
                        </a>
                      </TableCell>
                      <TableCell>
                        URLを管理します。また、URLによりUIパーツの出し分けをします。
                      </TableCell>
                    </TableRow>
                    <TableRow key={3}>
                      <TableCell component="th" scope="row">
                        <a href="https://redux-form.com/7.4.2/" target="_blank">
                          Redux Form
                        </a>
                      </TableCell>
                      <TableCell>
                        React+Reduxを使用したフォームアプリを簡単に作成するためのライブラリです。
                      </TableCell>
                    </TableRow>
                    <TableRow key={4}>
                      <TableCell component="th" scope="row">
                        <a
                          href="https://github.com/redux-saga/redux-saga/blob/master/README_ja.md"
                          target="_blank"
                        >
                          redux-saga
                        </a>
                      </TableCell>
                      <TableCell>
                        React+Reduxを使用したアプリの非同期処理(API呼び出し等)を管理するためのライブラリです。
                      </TableCell>
                    </TableRow>
                    <TableRow key={5}>
                      <TableCell component="th" scope="row">
                        <a
                          href="https://github.com/evgenyrodionov/redux-logger"
                          target="_blank"
                        >
                          redux-logger
                        </a>
                      </TableCell>
                      <TableCell>
                        Reduxの持つ状態の書き換え時のログを出力します。React+Reduxのサンプルを試しながらF12でconsole.logを見てみてください。
                      </TableCell>
                    </TableRow>
                    <TableRow key={6}>
                      <TableCell component="th" scope="row">
                        <a
                          href="https://github.com/aikoven/typescript-fsa"
                          target="_blank"
                        >
                          TypeScript FSA
                        </a>
                      </TableCell>
                      <TableCell>
                        TypeScriptでAction(Reduxの状態の書き換え処理)を簡単に作成するためのライブラリです。
                      </TableCell>
                    </TableRow>
                    <TableRow key={7}>
                      <TableCell component="th" scope="row">
                        <a href="https://material-ui.com/" target="_blank">
                          Material-UI
                        </a>
                      </TableCell>
                      <TableCell>
                        Reactを利用したアプリで主流のマテリアルデザインを採用したUIパーツキットです。Bootstrapのようなものです。
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Typography
        variant="subheading"
        className={props.classes.typographySubheading}
      >
        リポジトリ
      </Typography>
      <Grid container={true} justify="center">
        <Grid item={true} xs={11}>
          <a
            href="https://github.com/sh-sasaki/react-redux-ts-practice"
            target="_blank"
          >
            react-redux-ts-practice
          </a>
        </Grid>
      </Grid>
    </div>
  );
};
