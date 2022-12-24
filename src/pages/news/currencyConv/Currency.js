import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import * as  style from '../../../styles/Business.module.css'
import axios from 'axios';
import { useState } from 'react';
const options = ['USD', ''];

export default function Currency() {
  
   
    const [value1, setValue1] = React.useState(options[0]);
  const [inputValue1, setInputValue1] = React.useState('');

  const [value2, setValue2] = React.useState(options[0]);
  const [inputValue2, setInputValue2] = React.useState('');
   
 const [data, setdata] = useState({});
  
  const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${inputValue1}&to_currency=${inputValue2}&apikey=2XIOQNKU3KUAHAJE`;
  

  
const searchCurrency = (event) => {

    if(event.key === 'Enter' ) {
    axios.get(url).then((response) => {
  setdata(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])


    })
    

    }
  }

 



const dat = parseInt(data)

console.log(inputValue1)
  console.log(inputValue2)
  
  return (


    <div className={style.bigcontainer}>


        <Stack  className={style.containerRate} spacing={2} sx={{ width: 200 }}>
      <Autocomplete
      className={style.size1}
        id="free-solo-demo"
        freeSolo
        value={value1}
        onChange={(event, newValue) => {
          setValue1(newValue);
        }}
        inputValue1={inputValue1}
        onInputChange={(event, newInputValue) => {
          setInputValue1(newInputValue);
        }}

        options={top100.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} label="Currency 1" className={style.textf1} />
    }
      />
      <Autocomplete
        className={style.size2}
        freeSolo
        value={value2}
        onKeyDown ={searchCurrency}
        onChange={(event, newValue) => {
          setValue2(newValue);
        }}
        inputValue2={inputValue2}
        onInputChange={(event, newInputValue) => {
          setInputValue2(newInputValue);
        }}
        id="free-solo-Demo"
        disableClearable
        options={top100.map((option) => option.title)}
        renderInput={(params) => (
            <TextField
            className={style.textf}
            {...params}
              label="currency 2"
              InputProps={{
                ...params.InputProps,
                type: 'search'
               ,
              }}
            />
          
        )}

/>

<div className={style.div}>{ dat ?   dat : ""}.{inputValue2}</div>

          
    </Stack>
    </div>
  );
}


const top100 = [
    { title: 'USD' },
    { title: 'KES' },  
    { title: 'JYUAN' },
    { title: '$' },
    { title: '$' },
    { title: '$' },
    { title: '$' },  
    { title: '$' },
    { title: '$' },
    { title: '$' },
    
  ];
  