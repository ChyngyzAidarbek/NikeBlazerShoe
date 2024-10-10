import { products } from "./componets/ShoeItem";
import "./componets/ScoeItem.css"
function App() {
  return (
    <div className ="div">
      <h1>Nike Blazer Mid Suede</h1>
      <div className="Shoe">
    {products.map((item)=>(
      <div className="shoe-blok">
         <img src={item.image} alt=""  className="img-shoes"/>
        <p >{item.title}</p>
        <h6>Цена:</h6>
        <span className="price-shoes">{item.price}</span>
      </div>
    ))}
  </div>;
    </div>
  )
}

export default App;
