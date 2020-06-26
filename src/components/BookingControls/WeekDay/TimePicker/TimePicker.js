import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing(),
    marginRight: theme.spacing(2),
    width: 120,
  },
}));

export default function TimePickers(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        // id='time'
        label={props.label}
        type='time'
        // defaultValue='07:30'
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        style={props.style}
        inputProps={{
          step: 300, // 5 min
        }}
        onChange={props.onChange}
        value={props.value}
      />
    </form>
  );
}
