import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
 const navigationItems =()=>(
     <ul className={classes.NavigationItems}>
         <NavigationItem Link="/" active>Burger</NavigationItem>
         <NavigationItem>Check Out</NavigationItem>
     </ul>
 );
 export default navigationItems;