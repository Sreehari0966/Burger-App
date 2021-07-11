import React ,{Component} from 'react';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Burger from '../../Components/Burger/Burger';
import Model from '../../Components/UI/Model/Model';
import Auxi from '../../hoc/Auxi/Auxi';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

const INGREDIENTS_PRICES={
    salad:0.5,
    bacon:0.4,
    cheese:0.7,
    meat:1.3
}
class BurgerBuilder extends Component{

    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    };
    updatePurchaseState(ingredients){
       
         const sum = Object.keys(ingredients)
         .map(igKey=>{
             return ingredients[igKey];
         })
         .reduce((sum,el)=>{
             return sum+el;
         },0);
         this.setState({purchasable:sum>0});
}
    addIngredientsHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition=INGREDIENTS_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientsHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        };
        updatedIngredients[type]=updatedCount;
        const priceDeduction=INGREDIENTS_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }
    purchaseHandler=()=>{
          this.setState({purchasing:true})
    }
    cancelPurchageHandler=()=>{
        this.setState({purchasing:false})
    }
    continuePurchageHandler=()=>{
        alert('you can continue')
    }
    render(){
        const disableInfo={
            ...this.state.ingredients
        }
        for(let key in disableInfo){
           disableInfo[key]=disableInfo[key]<=0
           //salad:true,meat:false....
        }
        return(
            <Auxi>
                <Model show={this.state.purchasing}
                     modelClicked={this.cancelPurchageHandler}>
                   <OrderSummary 
                   ingredients={this.state.ingredients}
                   purchaseCanclled={this.cancelPurchageHandler}
                   purchaseContinued={this.continuePurchageHandler}
                   price={this.state.totalPrice}/>
                </Model>
            <Burger  ingredients={this.state.ingredients}/>
            <BuildControls 
            ingredientAdded={this.addIngredientsHandler}
            ingredientRemoved={this.removeIngredientsHandler}
            disabled={disableInfo}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler}/>
            </Auxi>
        )
    }
}
export default BurgerBuilder;