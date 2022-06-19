import React from "react"
import './Display.css'
import productList from "./ProductList"
class Display extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="whole">
                {productList.map((item)=>
                        <div className="overall">
                            <button className="button" onClick={e=>this.props.itemClick(item.id,e)} >
                                <img className="productImg"  src={item.url}/>
                                <p className="content">
                                    <h5 className="priceTitle">{item.brand}</h5>
                                    <p className="desc">{item.desc}</p>
                                    <h5 className="priceTitle">{item.price}</h5>
                                </p>
                            </button>
                        </div>
                )}
            </div>
        )
    }
}
export default Display;