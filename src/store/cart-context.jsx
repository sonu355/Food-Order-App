import React from 'react'

const cartContext = React.createContext({
  items: [],
  amount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
})
console.log(cartContext);
export default cartContext
