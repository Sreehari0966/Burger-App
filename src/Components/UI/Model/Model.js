import React,{Component} from 'react';
import Auxi from '../../../hoc/Auxi/Auxi';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Model.module.css'

class Model extends Component{
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show;
    }
    componentWillUpdate(){
        console.log("model is updated")
    }
    render(){
        return(<Auxi>
            <Backdrop show={this.props.show} clicked={this.props.modelClicked}/>
        <div
         className={classes.Modal}
         style={{
             transform:this.props.show? 'translateY(0)':'translateY(-100vh)',
             opacity:this.props.show? '1': '0'
         }}>
           {this.props.children}
        </div>
        </Auxi>);
    }
}
export default Model