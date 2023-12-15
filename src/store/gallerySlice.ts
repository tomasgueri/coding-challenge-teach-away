import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchGallery } from './galleryThunks';

interface GalleryState {
  images: any[]; // Define a more specific type for your images
  searchQuery: string;
  currentPage: number;
  totalPages: number;
}

const initialState: GalleryState = {
  images: [],
  searchQuery: '',
  currentPage: 1,
  totalPages: 0,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setImages: (state, action: PayloadAction<any[]>) => {
      state.images = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGallery.fulfilled, (state, action: PayloadAction<{ images: any[]; totalPages: number }>) => {
      state.images = action.payload.images;
      state.totalPages = action.payload.totalPages;
    });
  },
});

export const { setImages, setSearchQuery, setCurrentPage, setTotalPages } = gallerySlice.actions;

export const galleryReducer = gallerySlice.reducer;
