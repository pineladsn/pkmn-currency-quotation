import React, { useEffect } from 'react';
import axios from 'axios';
import CurrencyInput from '../CurrencyInput';

import { makeStyles } from '@material-ui/core/styles';
import { Row } from './styles';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

function CurrencyExchange() {
  const useStyles = makeStyles(theme => ({
    icon: {
      margin: '48px 32px',
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    fetchExchange()
  });

  async function fetchExchange() {
    try {
      const response = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Row>
        <CurrencyInput currencyName={'USD'} />
        <SwapHorizIcon className={classes.icon} />
        <CurrencyInput currencyName={'BRL'} />
      </Row>
    </>
  );
}

export default CurrencyExchange;