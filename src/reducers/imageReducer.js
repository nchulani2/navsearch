const initialState = {
  imageData: [],
  total: null,
  total_pages: null,
  page: null,
  query: '',
  scrolling: false, // for when user reaches bottom of page
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_IMAGES':
      return {
        ...state,
        imageData: action.payload.data,
        page: action.payload.page,
        scrolling: false,
        loading: false
      };
    case 'LIST_MORE_IMAGES':
      return {
        ...state,
        imageData: [...state.imageData, ...action.payload.data],
        page: action.payload.page,
        scrolling: false,
        loading: false
      };
    case 'GET_IMAGES':
      return {
        ...state,
        imageData: action.payload.data.results,
        total: action.payload.data.total,
        total_pages: action.payload.data.total_pages,
        page: action.payload.page,
        query: action.payload.input,
        scrolling: false
      };
    case 'GET_MORE':
      return {
        ...state,
        imageData: [...state.imageData, ...action.payload.data.results],
        scrolling: false,
        total: action.payload.data.total,
        total_pages: action.payload.data.total_pages,
        page: action.payload.page
      };
    // case 'LOADING':
    //   return { ...state, loading: true };
    case 'SCROLLING':
      return { ...state, scrolling: true };
    case 'RESET':
      return {
        ...state,
        imageData: [],
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
