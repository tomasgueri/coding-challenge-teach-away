import { createAsyncThunk } from '@reduxjs/toolkit';
import { getGallery } from '../services/imgurService';

interface GalleryApiResponse {
  images: any[];
  totalPages: number;
}

interface ImgurApiResponseItem {
  id: string;
  title: string;
  description?: string;
  link: string;
  images?: { link: string }[];
}

export const fetchGallery = createAsyncThunk<GalleryApiResponse, { section: string; sort: string; window: string; page: number }>(
  'gallery/fetchGallery',
  async (params) => {
    const response = await getGallery(params.section, params.sort, params.window, params.page);
    console.log('response', response)
    return {
      images: response?.data.map((item: ImgurApiResponseItem) => {
        return {
          ...item,
          imageUrl: item.images ? item.images[0].link : item.link, // For albums, use the first image
        };
      }),
      totalPages: calculateTotalPages(response?.data, 20), // Implement this function based on the response
    };
  }
);

// This is a placeholder function.
// You need to adjust it based on the actual pagination data provided by the Imgur API.
function calculateTotalPages(response: ImgurApiResponseItem[], itemsPerPage: number): number {
  // If the API provides total items directly, use that instead
  const totalItems = response.length; // Replace with the actual total items if available
  return Math.ceil(totalItems / itemsPerPage);
}

