import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';

function Product(props) {

  const [{ basket }, dispatch] = useStateValue()

  const addTobBasket = () => {
    //dispatch the item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      }
    })

  }
  return (
    <div className='product'>
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small style={{ fontWeight: 'bold' }}>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">{Array(props.rating).fill().map((_, i) => {
          return (<p>⭐</p>)

        })}</div>


      </div>
      <img src={props.image} alt="" />
      <button onClick={addTobBasket}><strong>Add to Basket</strong></button>


    </div>
  )
}

export default Product