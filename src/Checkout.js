import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="Checkout">
            <div className="Checkout_left">
                {/* <img src="./materials/slideA.jpg" alt="" className="Checkout_add" /> */}
                <div className="Checkout_add"><h4>Your Advertisement will show here</h4></div>
                <div>
                    {/* <h5>{user.email}</h5> */}
                    <h4 className="Checkout_title">
                        Shopping Cart
                    </h4>
                    {basket.map(
                        (item) => <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    )}
                </div>
            </div>
            <div className="Checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout