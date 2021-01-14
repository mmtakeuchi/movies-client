import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

const Search = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Search Movies"
          variant="outlined"
          className="query"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
          placeholder="Search Movies"
        />
      </form>
    </div>
  );
};

export default Search;
