import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchAllItems = createAsyncThunk(
  "woodItems/fetchData",
  async () => {
    const res = await fetch(`/api/wood_hub?category=collection`, {
      cache: "no-cache",
    });
    const items = await res.json();
    const kitchen = items.kitchen;
    const entryFoyer = items.entryFoyer;
    const allItemArray = [...kitchen, ...entryFoyer];
    return allItemArray;
  }
);

export type categoryTypes = {
  isLoading: boolean;
  allItems: [];
  living: [];
  kitchen: [];
  bathroom: [];
  outdoor: [];
  entryFoyer: [];
  bedroom: [];
  office: [];
  dining: [];
  error: string;
};

const initialState = {
  isLoading: false,
  allItems: [],
  error: "",
} as categoryTypes;

const welcomePageSlice = createSlice({
  name: "welcomePageItems",
  initialState,
  reducers: {
    alldata: (state, action) => {
      state.allItems = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllItems.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(
        fetchAllItems.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.allItems = action.payload;
          state.isLoading = false;
        }
      ),
      builder.addCase(
        fetchAllItems.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload.message;
        }
      );
  },
});

export default welcomePageSlice.reducer;
export const { alldata } = welcomePageSlice.actions;
