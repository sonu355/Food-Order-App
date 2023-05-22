import React,{useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import cartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(cartContext)
    console.log(cartCtx)
    console.log(cartCtx.totalAmount);

    const totalAmount = cartCtx.totalAmount ? `$${cartCtx.totalAmount.toFixed(2)}` : '$0.00'
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ price: item.price, id: item.id, name: item.name, amount: 1 });
    }
    
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onAdd={cartItemAddHandler.bind(null, item.id)}
                    onRemove={cartItemRemoveHandler.bind(null, item)}
                />
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
