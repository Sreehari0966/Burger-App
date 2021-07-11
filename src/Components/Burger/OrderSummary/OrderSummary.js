//import classes from '*.module.css';
import React,{Component} from 'react';
import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button'

class OrderSummery extends Component{
  //this could be a functional component not a class component
  componentWillUpdate(){
    console.log("order summary is updated")
  }
  
  render(){
    const ingredientSummary=Object.keys(this.props.ingredients)
    .map(igkey=>{
        return <li key={igkey}>
                <span style={{textTransform:'capitalize'}}>{igkey}</span>:{this.props.ingredients[igkey]}
              </li>});
    return( 
       <Auxi>
      <h3>your order</h3>
      <p>A delisious burger with the folowing ingredients</p>
      <ul>
         {ingredientSummary}
      </ul>
      <p>total price:{this.props.price.toFixed(2)}</p>
      <p>check your order</p>
      <Button btnType="Danger" clicked={this.props.purchaseCanclled}>CANCEL</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
  </Auxi>);
  }
}

export default OrderSummery;