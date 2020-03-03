import React from 'react';
import TextField from '@material-ui/core/TextField';

import NumberFormatCustom from '../NumberFormatCustom'

export default function CurrencyInput() {
  const [values, setValues] = React.useState({
    numberformat: '1000',
  });

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };
  
  return (
    <TextField
      label="Value"
      value={values.numberformat}
      onChange={handleChange('numberformat')}
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
    />
  );
}
