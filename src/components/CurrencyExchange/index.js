import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import { Container, Row } from './styles';
import CurrencyInput from '../CurrencyInput';
import CurrencySelect from '../CurrencySelect';
import QuotationResults from '../QuotationResults';

function CurrencyExchange() {
  const useStyles = makeStyles(theme => ({
    icon: {
      margin: '48px 32px',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

  const classes = useStyles();
  const [totalAmmount, setTotalAmmount] = useState('');
  const [quotation, setQuotation] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');

  useEffect(() => {
    fetchExchange()
  }, []);

  async function fetchExchange() {
    // TODO: Refactor and fix get URL
    try {
      const response = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL');

      const value = document.getElementById('formatted-numberformat-input')
      const ammount = value.value.replace('$ ', '').replace(',','')

      const todayValue = response.data.USD.ask;
      setQuotation(parseFloat(todayValue).toFixed(2))

      const result = ammount * todayValue
      setTotalAmmount(result.toFixed(2))
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  // Create refs to inputs to get its values
  return (
    <Container>
      <Row>
        <FormControl className={classes.formControl}>
          <CurrencySelect currencyName={'USD'} />
          <CurrencyInput />
        </FormControl>

        <ArrowRightAltIcon className={classes.icon} />
        
        <FormControl className={classes.formControl}>
          <CurrencySelect currencyName={'BRL'} />
        </FormControl>
        
        <QuotationResults value={quotation} totalAmmount={totalAmmount} image={pokemonImage} />
      </Row>
    </Container>
  );
}

export default CurrencyExchange;