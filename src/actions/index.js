import shop from '../api/shop';
import * as types from '../constants/ActionTypes';
import http from '../utils/axios';

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
});

export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products));
    });
};
export const getAllFeeds = () => dispatch => {
    http.get('https://api.saharbazar.com/stories')
        .then(function (response) {
            console.log(response);
            shop.getProducts(products => {
                dispatch(receiveProducts(products));
            });
        })
        .catch(function (error) {
            console.log(error);
    });
}
const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
});

export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId));
    }
};

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState();

    dispatch({
        type: types.CHECKOUT_REQUEST
    });
    shop.buyProducts(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        });
        // Replace the line above with line below to rollback on failure:
        // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    });
};
