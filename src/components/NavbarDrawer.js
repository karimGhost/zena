import React from 'react'
import { useState } from 'react';
import { Link } from 'gatsby'

import  *  as nav from '../styles/navbar.module.css';
export default function NavbarDrawer({props}) {

    const [isOpen, setIsOpen] = useState(false);


const drawer ={
    height: isOpen ? "100%" : "0px",
 transition:  "0.40s linear"  ,
overflow: isOpen ? "" : "hidden" 
}



  return(

    <div>    
   <div onClick={() => setIsOpen(true)} className={nav.Humberger}  id={isOpen ? "b" : ""}>
 <div className="bb">
      <div className=" bar1"></div>
   
   
    
      <div className=" bar3"></div>
    </div>
    </div>
<div style={drawer} className={nav.Con}>
<div onClick={() => setIsOpen(false)} className={nav.Humberger}  id={isOpen ? "b" : ""}>

<div className=" bar1"></div>
   
   
    
      <div className=" bar3"></div>
</div>
    <nav className={nav.navcolor}>
        
    <h1 className={nav.logow}>Zena</h1>
  
  <div  className={nav.Linksbar}> 
<Link to="/">News</Link>
<Link to="/news/Business">Business</Link>
<Link to="/news/Sports">Sports</Link>
<Link to="/news/Technology">Technology</Link>
<Link to="/news/Entertainment">Entertainment</Link>
</div>
<div className={nav.logsin}>
<Link to ="/">()Login</Link>
</div>
</nav>
</div>
</div>
  )
}
