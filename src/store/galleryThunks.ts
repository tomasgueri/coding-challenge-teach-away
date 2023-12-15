import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGallery } from '../services/imgurService';

interface GalleryApiResponse {
  images: any[]; // Replace 'any' with a more specific type if available
  totalPages: number;
}

export const fetchGallery = createAsyncThunk<GalleryApiResponse, { section: string; sort: string; window: string; page: number }>(
  'gallery/fetchGallery',
  async (params): Promise<GalleryApiResponse> => {
    const { section, sort, window, page } = params;
    const response = await getGallery(section, sort, window, page);
    console.log('response', response);
    return {
      images: response.data,
      totalPages: response.totalPages
    };

    //return ['response'];
  }
);
