const initialState = {
  images: [],
  total: null,
  total_pages: null,
  page: null,
  query: null,
  scrolling: false // for when user reaches bottom of page
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IMAGES':
      return {
        ...state,
        images: action.payload.data.results,
        total: action.payload.data.total,
        total_pages: action.payload.data.total_pages,
        page: action.payload.page,
        query: action.payload.input,
        scrolling: false
      };
    case 'GET_MORE':
      return {
        ...state,
        images: [...state.images, ...action.payload.data.results],
        scrolling: false,
        total: action.payload.data.total,
        total_pages: action.payload.data.total_pages,
        page: action.payload.page
      };
    case 'SCROLLING':
      return { ...state, scrolling: true };
    case 'RESET':
      return {
        ...state,
        images: [],
        page: null,
        query: null,
        scrolling: false,
        total: null,
        total_pages: null
      };
    default:
      return null;
  }
};
