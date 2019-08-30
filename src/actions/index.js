import unsplash from '../api/unsplashapi';

export const getImages = inputText => async dispatch => {
  const response = await unsplash.get('/search/photos', {
    params: {
      query: inputText, // put form submit query here
      per_page: 20,
      page: 1
    }
  });

  dispatch({ type: 'GET_IMAGES', payload: response.data });
};
