import React from 'react'
import Navbar from './Navbar'
import NavbarDrawer from './NavbarDrawer'
import { useState } from 'react';
import MyComponent from '../pages/Data';
export default function Layout({children}) {

    return (
    <div>
        <Navbar />
        <NavbarDrawer  />
     
      <div>
        {children}

      </div>


      <footer>
  <p>Copyright 2022 - {new Date().getFullYear()} Zena</p>
</footer>
    </div>
  )
}
