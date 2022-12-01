import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getbasketTotal } from './reducer';

function Subtotal() {
    const [{ basket }, action] = useStateValue();
    return (
        <div className='Subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />This order contain gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getbasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
            />
            <button><strong>Proceed to Checkout</strong></button>


        </div>
    )
}

export default Subtotal