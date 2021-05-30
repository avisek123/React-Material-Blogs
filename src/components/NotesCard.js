import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { Avatar, makeStyles } from "@material-ui/core";
import { blue, yellow } from "@material-ui/core/colors";

const useStyle = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "work") {
        return "1px solid red";
      }
    },
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return yellow[700];
      }
      return blue[500];
    },
  },
});
function NotesCard({ note, handleDelete }) {
  const classes = useStyle(note);
  return (
    <>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note?.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              onClick={() => {
                handleDelete(note?.id);
              }}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note?.title}
          subheader={note?.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note?.details}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default NotesCard;
