export default (state = false, action) => {
  switch (action.type) {
    case 'OPEN_NAV':
      return action.payload;
    case 'CLOSE_NAV':
      return action.payload;
    default:
      return state;
  }
};
