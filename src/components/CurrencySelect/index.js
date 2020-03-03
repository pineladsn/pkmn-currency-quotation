import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function CurrencySelect(props) {
  const useStyles = makeStyles(theme => ({
    select: {
      minWidth: '185px',
    },
  }));

  const classes = useStyles();
  const [currency, setCurrency] = React.useState('');

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    setCurrency(props.currencyName)
  }, []);

  return (
    <>
      <InputLabel id="currency-select-label">Currency</InputLabel>
      <Select
        className={classes.select}
        labelId="currency-select-label"
        id="currency-select"
        value={currency}
        onChange={handleChange}
      >
        <MenuItem value={'BRL'}>Brazilian Real</MenuItem>
        <MenuItem value={'USD'}>Dólar</MenuItem>
        <MenuItem value={'EUR'}>Euro</MenuItem>
      </Select>
    </>
  );
}

export default CurrencySelect;