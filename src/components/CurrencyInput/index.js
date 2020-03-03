import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import NumberFormatCustom from './../NumberFormatCustom'

// import { Container } from './styles';

function CurrencyInput(props) {
  const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const [currency, setCurrency] = React.useState('');

  const [values, setValues] = React.useState({
    textmask: '(1  )    -    ',
    numberformat: '1320',
  });

  const handleChange2 = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    setCurrency(props.currencyName)
  }, []);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="currency-select-label">Moeda</InputLabel>
      <Select
        labelId="currency-select-label"
        id="currency-select"
        value={currency}
        onChange={handleChange}
      >
        <MenuItem value={'BRL'}>Real</MenuItem>
        <MenuItem value={'USD'}>Dólar</MenuItem>
        <MenuItem value={'EUR'}>Euro</MenuItem>
      </Select>

      <TextField
        label="react-number-format"
        value={values.numberformat}
        onChange={handleChange2('numberformat')}
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </FormControl>
  );
}

export default CurrencyInput;