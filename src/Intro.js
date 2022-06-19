import logo from './logo.png'
import React from "react";
import Display from './Display';
import ProductOverview from './ProductOverview';
import './Intro.css'
class Intro extends React.Component{
    
    constructor(props){
        super(props)
        this.clickHandler=this.clickHandler.bind(this)
        this.state={
            productId:""
        }
    }
    
    clickHandler(Id){
        this.setState({productId:Id})
    }
    
    render(){
        return(
            <div className='landing'>  
                <p className='logo'>
                    <img src={logo} height="80" width="80"/>
                    <h1 className="websiteName"> MySa's Closet..!!</h1>
                    <p className='grpBtns'>
                        <button>Wishlist</button>
                        <button>Cart</button>
                    </p>
                </p> 
                {this.state.productId==""?<Display itemClick={this.clickHandler}/>:<ProductOverview productId={this.state.productId}/>}
            </div>
        )
    }
}

export default Intro;