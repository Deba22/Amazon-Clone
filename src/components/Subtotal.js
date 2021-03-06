import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";
function Subtotal() {
    const history = useHistory();
    const [{ basket, user }, dispatch] = useStateValue();

    const proceedToCheckout = e => {
        if (user) {
            if (basket.length > 0) {
                history.push('/payment');
            }
            else {
                alert('Add items to basket');
            }
        } else {
            alert('Please Signin');
        }
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
            </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix='&#8377;'
            />
            <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
