import React from 'react'
import { useState, useEffect } from 'react';

import $ from "jquery"

import axios from 'axios';
import { green } from '@mui/material/colors';



export default function  () {

  const [market, setmarket] =useState({

    data: null,
    color: 'green'
  });


    const [market2, setmarket2] =useState({

      data: null, 
      color: 'red'
    });

    const [error, setError] = useState(null);

  const fetchUrl2 = 'https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=f8ff84c0ba20f4e45161f78360babf5c' ;
  const fetchUrl = 'https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=f8ff84c0ba20f4e45161f78360babf5c' ;

    useEffect(() => {
      
      async function fetchData() {
       
        try {
          const response = await axios.get(fetchUrl);  

        setmarket((prevState) => ({
          ...prevState,
          data: response.data
        }));
      
      } catch (error) {
setError(error)
      
      }
    }
fetchData()

    }, []);
  


    useEffect(() => {
      
      async function fetchData() {
       
        try {
          const response = await axios.get(fetchUrl);  
console.log(`bad ${response}`)
        setmarket2((prevState) => ({
          ...prevState,
          data: response.data
        }));
      
      } catch (error) {

        console.log(error);
        setmarket2('getting market')
      }
    }
fetchData()

    }, [market2]);
  
  
const [shufle, setshufle] = useState();




  
  
  
const dat = market.data ? market.data.map(((obj) => ({ ...obj, color: 'green'  }))) : null;

const dat2 = market2.data ? market2.data.map(((obj1) => ({ ...obj1, color: 'red'  }))) : null;

 




const va = market.data ? dat.concat(dat2) : null


//shuffling  using fisheryets method

const shuffleArray = arr => {

  const shuffledArr = market.data && market2.data ? arr.slice() : null;


  for( let i =  market.data && market2.data ? shuffledArr.length - 1 : null ; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
 
 
  return shuffledArr;
};

let vaa = market2.data ?  shuffleArray(va) : null;
console.log(vaa)
useEffect(() => {
 

window.setInterval(rollback, 100);
    
    function rollback(){
      
     let first =  $("#card").find("div:first");
      
     let width = first.width();
      
     first.animate({marginLeft: -width}, 9000, function(){
       
       let last = $("#card").find("div:last");
       
       last.after(first);
       
       first.css({marginLeft: 0})
     })
      
    }
    


}, [va])

if (error) {
  return <div style={{color: "black"}}>An error occurred:getting market Data </div>;
}

if (!market.data) {
  return <div>Loading...</div>;
}

if(!market2.data){
  return <div>Loading...</div>;
}

  return (


    <div id="card">   
       <div className='marketContainer' >
       { vaa.map(da =>  <p key={da.name} >{da.name} {da.changesPercentage.toFixed()} <b style={{color: da.color === 'green' ? 'rgb(46, 197, 16)'  : 'rgb(252, 60, 60)'}}>{da.color === 'green' ? "+" : ""}{da.change}%</b> </p>  )} 
    </div>

      
    </div>
  )
}
