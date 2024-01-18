const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0,
};
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INC") {
    newStore = { counter: store.counter + 1 };
  } else if (action.type === "DEC") {
    newStore = { counter: store.counter - 1 };
  } else if (action.type === "INC_TWO") {
    newStore = { counter: store.counter + 2 };
  } else if (action.type === "ADDITION") {
    newStore = { counter: store.counter + action.payload.number };
  }
  return newStore;
};
const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INC" });
store.dispatch({ type: "DEC" });
store.dispatch({ type: "INC_TWO" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
