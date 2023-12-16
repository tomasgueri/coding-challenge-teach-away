import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchGallery } from './galleryThunks';

type Tag = {
  name?: string;
};
interface GalleryImage {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  tags?: Tag[];
  ups?: number; // Upvotes
  downs?: number; // Downvotes
  score?: number;
}

interface GalleryState {
  images: GalleryImage[];
  isLoading: boolean;
  error: string | null;
}

const initialState: GalleryState = {
  images: [],
  isLoading: false,
  error: null,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<GalleryImage[]>) => {
      state.images = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGallery.fulfilled, (state, action: PayloadAction<{ images: GalleryImage[] }>) => {
        state.images = action.payload.images;
        state.isLoading = false;
      })
      .addCase(fetchGallery.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGallery.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? null;
      });
  },
});

export const { setImages } = gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;
