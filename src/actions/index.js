import unsplash from '../api/unsplashapi';

// const loading = () => dispatch => {
//   dispatch({ type: 'LOADING' });
// };

const scrolling = () => dispatch => {
  dispatch({ type: 'SCROLLING' });
};

// need to reset state when user submits a new request
const reset = () => dispatch => {
  dispatch({ type: 'RESET' });
};

/* -------------------------------------------------------------------------- */
// IMAGE ACTIONS START
// @gallery
export const listImages = () => async dispatch => {
  dispatch(reset());

  const response = await unsplash.get('/photos', {
    params: {
      per_page: 20,
      page: 1,
      order_by: 'latest'
    }
  });

  dispatch({ type: 'LIST_IMAGES', payload: { data: response.data, page: 1 } });
};

export const listMoreImages = () => async (dispatch, getState) => {
  dispatch(scrolling());

  const data = getState().data;

  const response = await unsplash.get('/photos', {
    params: {
      per_page: 20,
      page: data.page + 1,
      order_by: 'latest'
    }
  });

  dispatch({
    type: 'LIST_MORE_IMAGES',
    payload: { data: response.data, page: data.page + 1 }
  });
};
// end @gallery

// @searching
export const getImages = inputText => async dispatch => {
  dispatch(reset());
  const response = await unsplash.get('/search/photos', {
    params: {
      query: inputText, // put form submit query here
      per_page: 20,
      page: 1
    }
  });

  dispatch({
    type: 'GET_IMAGES',
    payload: { data: response.data, input: inputText, page: 1 }
  });
};

export const getMore = () => async (dispatch, getState) => {
  dispatch(scrolling());
  const data = getState().data;
  const response = await unsplash.get('/search/photos', {
    params: {
      query: data.query,
      per_page: 20,
      page: data.page + 1
    }
  });

  dispatch({
    type: 'GET_MORE',
    payload: { data: response.data, input: data.query, page: data.page + 1 }
  });
};
// end @searching
