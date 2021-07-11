import React,{Component} from 'react';
import Auxi from '../Auxi/Auxi';
import classes from './Layout.module.css' 
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer:false
    }
  sideDrawerClosedHandler=()=>{
      this.setState({showSideDrawer:false})
  }
 sideDrawerToggleHandler=()=>{
     this.setState((prevState)=>{
         return {showSideDrawer:!prevState.showSideDrawer};
     });
 }
    render(){
        return(<Auxi>
            <Toolbar toggleClicked={this.sideDrawerToggleHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children} 
            </main>
            </Auxi>);
    }

}

export default Layout
