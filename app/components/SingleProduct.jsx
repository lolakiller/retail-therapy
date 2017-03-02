import React from 'react'
import {connect} from 'react-redux'
import {ReviewForm} from './ReviewForm'

export const SingleProduct = props => {
	const product = props.product || []
	return(
      <div className="product-grid">
		    <div className="product-card col-sm-6 col-md-4">
            <img src={product.photoUrl} className="product-img"/>
            <div className="product-content">
               <h3>{product.name}</h3> 
              <h2>{product.price}</h2>
              <p className="product-desc">{product.description}</p>
              <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
                Add to cart
              </button>
            </div>
            <div className="reviews">
              <ReviewForm />
              <h3>Reviews for {product.name}</h3>
              <ul>
                {/* Map through reviews array here */}
              </ul>
            </div>
        </div>
      </div>
	)
}

const mapStateToProps = state => ({
	product: state.product
})

export default connect(mapStateToProps)(SingleProduct)