import React, {useContext, useState, useEffect} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import cartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
    const[btnIsHighlighted, setBtnIsHighlighted] = useState(false )
    const cartCtx = useContext(cartContext)
    console.log(cartCtx);
    const numberOfCartContext = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    const  { items } = cartCtx;
    const btnClasses = `${classes.button}  ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if(cartCtx.items.length === 0){
            return;
        }
        setBtnIsHighlighted(true)
    }, [ items ])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartContext}</span>
        </button>
    )
}

export default HeaderCartButton
