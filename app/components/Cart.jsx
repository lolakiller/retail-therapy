import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {addOneToQuantity, removeOneFromQuantity, changeQuantity} from '../reducers/cart'

const Cart = ({cart, user, addOneToQuantity, removeOneFromQuantity, changeQuantity}) => (
  <div>
    <h3>Cart</h3>
    <ul>
      {
        cart.every(cartItem => cartItem.product) && cart.map(cartItem => 
          <li key={cartItem.id}>
            <Link to={`/allProducts/${cartItem.product.id}`}>
              {cartItem.product.name}
            </Link>, quantity: {cartItem.quantity}, {cartItem.product.price}, 
            <button 
              type="button" 
              className="btn btn-default"
              onClick={evt => {
                evt.preventDefault()
                addOneToQuantity(cartItem.product.id, user.id)
              }}
            > +  
            </button>
            <button 
              type="button" 
              className="btn btn-default"
              onClick={evt => {
                evt.preventDefault()
                removeOneFromQuantity(cartItem.product.id, user.id)
              }}
            > - 
            </button>
            <form onSubmit={evt => {
                evt.preventDefault()
                changeQuantity(cartItem.product.id, user.id, evt.target.quantity.value)
                evt.target.quantity.value = ''
              }
            }>
              <input name="quantity" placeholder="new quantity" />
              <input type="submit" value="Update Quantity" />
            </form>
          </li>
        )
      }
    </ul>
  </div>
)

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.auth
})

const mapDispatchToProps = dispatch => ({
  addOneToQuantity: (productId, userId) => {
    dispatch(addOneToQuantity(productId, userId))
  },
  removeOneFromQuantity: (productId, userId) => {
    dispatch(removeOneFromQuantity(productId, userId))
  },
  changeQuantity: (productId, userId, quantity) => {
    dispatch(changeQuantity(productId, userId, quantity))
  }
})

// will need this when we have a plus, minus, etc, change quant thing in the cart itself
// const mapDispatchToProps = dispatch => {}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)