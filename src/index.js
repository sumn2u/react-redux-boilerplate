import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import reducer from './reducers';
import { getAllProducts, getAllFeeds } from './actions';
import App from './containers/App';
import { store } from './utils/store';

// const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//     middleware.push(createLogger());
// }

// export const store = createStore(reducer, applyMiddleware(...middleware));

store.dispatch(getAllProducts());
store.dispatch(getAllFeeds())
store.dispatch(getAllFeeds())
store.dispatch(getAllFeeds())
store.dispatch(getAllFeeds())
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
