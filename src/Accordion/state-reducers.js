const preventClose = (state, changes) =>
  changes.type === "closing" && state.openIndexes.length < 2
    ? { ...changes, openIndexes: state.openIndexes }
    : changes;

const singleOpen = (state, changes) =>
  changes.type === "opening"
    ? { ...changes, openIndexes: changes.openIndexes.slice(-1) }
    : changes;

const combineReducers = (...reducers) => (state, changes) =>
  reducers.reduce((acc, reducer) => reducer(state, acc), changes);

export { preventClose, singleOpen, combineReducers };
