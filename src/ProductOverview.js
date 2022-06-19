import Description from "./Description";
import productList from "./ProductList";
import './ProductOverview.css'
const ProductOverview=(props)=>{
    return(
        <div>
            {productList.map(
                (item)=>item.id==props.productId ? 
                <div>
                    <div>
                        <button><img className="briefImg" src={item.side1}/></button>
                        <button><img className="briefImg" src={item.side2}/></button>
                    </div>
                    <div>
                        <button><img className="briefImg" src={item.side3}/></button>
                        <button><img className="briefImg" src={item.side4}/></button>
                    </div>
                    <Description desc={item.Description}/>
                </div>
                :<p/>     
            )}
        </div>
    );
}
export default ProductOverview;