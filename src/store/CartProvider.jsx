import React, {useReducer} from 'react'
import cartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
   
    return defaultCartState;
}

const CartProvider = (props) => {
    const[cartstate, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemToCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const CartContext = {
        items: cartstate.items, 
        totalAmount: cartstate.totalAmount,
        addItem:    addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }

    return (
        <cartContext.Provider value={CartContext}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartProvider