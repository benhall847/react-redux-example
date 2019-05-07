import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// state
// is always an object
// you never mutate state directly
const initialState = {
	value: 1
};

// actions
// "increment" or "decrement"
const ACTION_INCREMENT = "increment";
const ACTION_DECREMENT = "decrement";

function increment() {
	return {
		type: ACTION_INCREMENT
	};
}
function decrement() {
	return {
		type: ACTION_DECREMENT
	};
}

// a reducer

function counter(state = initialState, action = { type: "" }) {
	switch (action.type) {
		case ACTION_INCREMENT:
			return {
				// ...state,
				value: state.value + 1
			};
			break;
		case ACTION_DECREMENT:
			return {
				value: state.value - 1
			};
			break;
		default:
			return state;
			break;
	}
}

// the store
window.counter = counter;
window.increment = increment;
window.decrement = decrement;

const store = createStore(counter);

window.store = store;
