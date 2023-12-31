import { itemTypes } from "@/components/AddItemForm";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchAllItems = createAsyncThunk(
  "woodItems/fetchData",
  async () => {
    const res = await fetch("/api/wood_hub?category=collection", {
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
  allItems: itemTypes[];
  entryitems: itemTypes[];
  likes: {};
  error: string;
};

const initialState = {
  isLoading: false,
  allItems: [],
  entryitems: [],
  likes: {},
  error: "",
} as categoryTypes;

const welcomePageSlice = createSlice({
  name: "welcomePageItems",
  initialState,
  reducers: {
    alldata: (state, action) => {
      state.allItems = action.payload;
    },
    putLikes: (state, action) => {
      let aa = state.allItems;
      aa[action.payload].likes += 1;
    },
    getEntryItems: (state) => {
      let aa = state.allItems.filter((sec) => sec.section === "entryFoyer");
      state.entryitems = aa;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllItems.pending, (state, action) => {
      state.isLoading = true;
    }),
      builder.addCase(
        fetchAllItems.fulfilled,
        (state, action: PayloadAction<itemTypes[]>) => {
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
export const { alldata, putLikes, getEntryItems } = welcomePageSlice.actions;
