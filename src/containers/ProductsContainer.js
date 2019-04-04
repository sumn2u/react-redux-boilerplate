import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from '../components/ProductItem';
import ProductsList from '../components/ProductsList';
import {getLoadStatus, getTotalRequest } from '../reducers/loading';
const ProductsContainer = ({ products, addToCart, loading, totalRequest}) => (
    <div>
        {loading !==totalRequest && (
        <progress id="progressbar" className="progress is-large is-info" max={totalRequest} value={loading}></progress>
        )}
    <ProductsList title="Products">
        {products.map(product => (
            <ProductItem key={product.id} product={product} onAddToCartClicked={() => addToCart(product.id)} />
        ))}
    </ProductsList>
    </div>
);

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        })
    ).isRequired,
    loading: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products),
    loading: getLoadStatus(),
    totalRequest: getTotalRequest()
});

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer);
