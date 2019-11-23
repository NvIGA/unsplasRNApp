const PicturesReducer = (state, action) => {
  if (state === undefined) {
    return {
      pictures: [],
      loading: true,
      error: null,
    };
  }
  switch (action.type) {
    case 'FETCH_PICTURES_REQUESTED':
      return {
        ...state,
        loading: true,
        pictures: [],
      };
    case 'FETCH_PICTURES_LOADED':
      return {
        ...state,
        loading: false,
        pictures: action.payload,
      };
    case 'FETCH_PICTURES_FAILURE':
      return {
        ...state,
        loading: false,
        pictures: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default PicturesReducer;
