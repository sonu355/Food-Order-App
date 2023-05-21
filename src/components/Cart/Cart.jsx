import React,{useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import cartContext from '../../store/cart-context'

const Cart = (props) => {
    const cartCtx = useContext(cartContext)
    console.log(cartCtx.items);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    
    const cartItems = (
        <ul>
            {cartCtx.items.map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
