import React from 'react';
import BurgerLogo from '../../Assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo=(props)=>(
   <div className={classes.Logo} style={{height:props.height}}>
       <img src={BurgerLogo} alt="MY Burger"/>
   </div>
)
export default logo;