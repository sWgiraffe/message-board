import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { getData, db } from './actions/DB';
const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(getData());
db.changes({
  since: 'now',
  live: true
}).on('change', () => store.dispatch(getData()));
store.subscribe(() => {
	console.log(store.getState());
});
render (
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('content')
);
