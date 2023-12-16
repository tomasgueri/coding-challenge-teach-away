import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchGallery } from './galleryThunks';

interface GalleryState {
  images: any[];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: GalleryState = {
  images: [],
  currentPage: 1,
  totalPages: 0,
  isLoading: false,
  error: null,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<any[]>) => {
      state.images = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGallery.fulfilled, (state, action: PayloadAction<{ images: any[]; totalPages: number }>) => {
        state.images = action.payload.images;
        state.totalPages = action.payload.totalPages;
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

export const { setImages, setCurrentPage, setTotalPages } = gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;
