import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { textAlign } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    width: 1000,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
    align : "center"
  },
}));

function handleChange(e) {
  console.log(e.value)
}


export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete 
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={option => option.title}
        //defaultValue={[top100Films[13]]}
        filterSelectedOptions
        onChange = {(event, value) => console.log(value)}
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Ingredient Search"
            placeholder="Enter an Ingredient"
            fullWidth     
          />
        )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Chicken'},
  { title: 'Cheese'},
  { title: 'Ramen'},
  { title: 'Chocolate'},
  { title: 'Pizza'},
  { title: 'Chinese Food'},
];