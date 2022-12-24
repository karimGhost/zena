import { Link } from 'gatsby'
import React from 'react';
import  *  as nav from '../styles/navbar.module.css';

export default function Navbar() {
 
  function isActive({isCurrent}){
    return isCurrent ? {className: nav.isActive} : null
  }
  return (
  
    <nav>
          <h1 className={nav.logo}>Zena</h1>
        <div className={nav.Links}> 
      <Link getProps={isActive} to="/">News</Link>
      <Link getProps={isActive} to="/news/Business">Business</Link>
      <Link getProps={isActive} to="/news/Sports">Sports</Link>
      <Link getProps={isActive} to="/news/Technology">Technology</Link>
      <Link getProps={isActive} to="/news/Entertainment">Entertainment</Link>
</div>
<div className={nav.login}>
    <Link to ="/">()Login</Link>
</div>
    </nav>
  )
}
