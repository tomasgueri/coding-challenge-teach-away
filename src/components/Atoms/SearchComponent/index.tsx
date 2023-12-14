import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../../../store/gallerySlice';
import { RootState } from '../../../store/store';

const SearchComponent = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.gallery.searchQuery);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <input
      type="Search images"
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default SearchComponent;
