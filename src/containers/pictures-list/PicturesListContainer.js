import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../untils';
import { fetchPictures } from '../../actions/GetPictures';
import { withPicturesStoreService } from '../../components/hoc';

import Spinner from '../../components/spinner';
import ErrorIndicator from '../../components/error-indicator';
import PicturesList from '../../components/pictures-list';

const PicturesListContainer = ({
  fetchPictures,
  pictures,
  loading,
  error,
  navigation,
}) => {
  useEffect(() => {
    fetchPictures();
  }, [fetchPictures]);
  if (loading) {
    return <Spinner />;
  }

  if (error !== null) {
    return <ErrorIndicator>{error.message}</ErrorIndicator>;
  }

  return <PicturesList pictures={pictures} navigation={navigation} />;
};

const mapStateToProps = ({ PicturesReducer: { pictures, loading, error } }) => {
  return {
    pictures,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { picturesStoreService }) => {
  return {
    fetchPictures: fetchPictures(picturesStoreService, dispatch),
  };
};

export default compose(
  withPicturesStoreService(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(PicturesListContainer);
