const initialState = {
  images: [],
  total: null,
  scrolling: false // for when user reaches bottom of page
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IMAGES':
      return {
        ...state,
        images: action.payload.results,
        total: action.payload.total
      };
    default:
      return null;
  }
};
