import React from 'react'
import MyComponent from '../pages/Data';

export default function PagesData(props) {

    const { da } = props
        const {setda} = props

    const {setoff} = props;

const {off} = props;

  return (
      <div className= {off ? "bigie" : "bigieoff"}>
<div className='times' style={{textAlign: "right" , color:"black", fontSize: "3.5rem", padding: "20px",cursor:"pointer"}} onClick={() =>  setoff(false)}>&times;</div>
     
      <div className="Big" > 
      <div className='tim' style={{display:'none', extAlign: "right" , color:"black", fontSize: "3.5rem", padding: "20px",cursor:"pointer"}} onClick={() =>  setoff(false)}>&times;</div>



<MyComponent dats = {da} />
</div>
</div>
  )
}
