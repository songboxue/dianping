import { createStore } from 'redux';
import reducer from '../reducers';
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState,
  	window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}