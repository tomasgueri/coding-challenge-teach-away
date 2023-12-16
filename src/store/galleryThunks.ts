import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGallery } from '../services/imgurService';

interface GalleryApiResponse {
  images: any[];
}

interface ImgurApiResponseItem {
  id: string;
  title: string;
  description?: string;
  link: string;
  images: { link: string }[];
}

export const fetchGallery = createAsyncThunk<
  GalleryApiResponse,
  { section: string; sort: string; window: string; },
  { rejectValue: string }
>(
  'gallery/fetchGallery',
  async (params, { rejectWithValue }) => {
    try {
      const response = await getGallery(params.section, params.sort, params.window);
      console.log('response', response)
      return {
        images: response?.data.map((item: ImgurApiResponseItem) => {
          return {
            ...item,
            imageUrl: Array.isArray(item.images) && item.images?.length > 0 ? item?.images[0]?.link : item.link, // For albums, use the first image
          };
        }),
      };
    } catch (error: any) {
      console.log('Error: ', error);
      return rejectWithValue('Failed to fetch gallery');
    }
  }
);
