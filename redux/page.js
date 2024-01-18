const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};
const reducer = (store = INITIAL_VALUE, action) => {
  const newStore = store;

  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1 };
  } else if (action.type === "DECREMENT_TWO") {
    return { counter: store.counter - 2 };
  } else if (action.type === "INCREMENT_TWO") {
    return { counter: store.counter + 2 };
  }

  return newStore;
};

const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT_TWO" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT_TWO" });
