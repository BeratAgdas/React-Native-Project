import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/actions';

const Pagination = ({ currentPage, totalPages }) => {
  const dispatch = useDispatch();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  return (
    <View>
      <Button title="Previous Page" onPress={handlePrevPage} disabled={currentPage === 1} />
      <Button title="Next Page" onPress={handleNextPage} disabled={currentPage === totalPages} />
    </View>
  );
};

export default Pagination;
