import React, { useEffect, useState } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import { Button, TableCell, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";

//Component
import { TableHeadAdmin } from "./TableHead";

//Service
import MessageService from "../Services/MessageService";

//Model
import { Message } from "../../Models/Message";

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
      width: "100%",
    },
  })
)(TableRow);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      width: "11%",
    },
  })
)(TableCell);

const useStyles = makeStyles({
  table: {
    width: "100%",
    tableLayout: "fixed",
  },
  button: {
    marginLeft: "5px",
    backgroundColor: "#D19D8E",
    color: "white",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "rgba(209, 157, 142, 0.6)",
    },
  },
  liens: {
    textDecoration: "none",
    color: "rgba(255, 255, 255, 0.8)",
  },
});

export const TableauMessages = () => {
  const classes = useStyles();
  const libelles = ["Sujet", "Message", "Auteur", "Date", "Editer"];

  const [messages, setMessages] = useState<Message[]>([]);

  const handleRemove = (id: string) => {
    MessageService.deleteMessage(id);
    MessageService.getMessages().then((_messages: Message[]) => {
      setMessages(_messages);
    });
  };

  useEffect(() => {
    MessageService.getMessages().then((result) => {
      setMessages(result);
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHeadAdmin libelles={libelles} />
          <TableBody>
            {messages?.map((_message: Message) => (
              <StyledTableRow key={_message.id}>
                <StyledTableCell component="th" scope="row">
                  <p
                    style={{
                      overflow: "hidden",
                      height: "20px",
                      width: "100%",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {_message.sujet}
                  </p>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <p
                    style={{
                      overflow: "hidden",
                      height: "20px",
                      width: "100%",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {_message.message}
                  </p>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <p
                    style={{
                      overflow: "hidden",
                      height: "20px",
                      width: "100%",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {_message.email}
                  </p>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <p
                    style={{
                      overflow: "hidden",
                      height: "20px",
                      width: "100%",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {_message.date}
                  </p>
                </StyledTableCell>
                <StyledTableCell>
                  <Link
                    to={`/Admin/Dashboard/Messages/${_message.id}`}
                    className={classes.liens}
                  >
                    <Button
                      variant="contained"
                      color="default"
                      size="small"
                      className={classes.button}
                    >
                      Lire
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="default"
                    size="small"
                    className={classes.button}
                    onClick={() => handleRemove(_message.id)}
                  >
                    Supprimer
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
