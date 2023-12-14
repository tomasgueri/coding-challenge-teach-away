import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGallery } from '../services/imgurService';

export const fetchGallery = createAsyncThunk(
  'gallery/fetchGallery',
  async (params: { section: string; sort: string; window: string; page: number }) => {
    const { section, sort, window, page } = params;
    /* const response = await getGallery(section, sort, window, page);
    console.log('response', response);
    return {
      images: response.data,
      totalPages: response.totalPages
    }; */

    return ['response'];
  }
);
