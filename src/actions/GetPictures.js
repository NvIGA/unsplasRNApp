const picturesLoaded = newPictures => {
  return {
    type: 'FETCH_PICTURES_LOADED',
    payload: newPictures,
  };
};

const picturesRequested = () => {
  return {
    type: 'FETCH_PICTURES_REQUESTED',
  };
};

const picturesError = error => {
  return {
    type: 'FETCH_PICTURES_FAILURE',
    payload: error,
  };
};

const fetchPictures = (picturesStoreService, dispatch) => () => {
  dispatch(picturesRequested());
  picturesStoreService
    .getPictures()
    .then(data => dispatch(picturesLoaded(data)))
    .catch(err => dispatch(picturesError(err)));
};

export { fetchPictures };
