import React, {useReducer} from 'react'
import cartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        // const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        const exitingCardItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const exitingCardItem = state.items[exitingCardItemIndex]
        
        let updatedItems;

        if(exitingCardItem) {
            const updatedItem = {
                ...exitingCardItem,
                amount: exitingCardItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[exitingCardItemIndex] = updatedItem;
        } else {
            
            updatedItems = state.items.concat(action.item);
        }

        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
        
    }
    if(action.type === 'REMOVE') {
        const exitingCardItemIndex = state.items.findIndex(item => item.id === action.item.id)
        const exitingItem = state.items[exitingCardItemIndex]
        const updatedTotalAmount = state.totalAmount - exitingItem.price
        let updatedItems;
        if (exitingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = {...exitingItem, amount: exitingItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[exitingCardItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            amount: updatedTotalAmount
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
