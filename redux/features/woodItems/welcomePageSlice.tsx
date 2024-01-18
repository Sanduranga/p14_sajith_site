import { itemTypes } from "@/components/AddItemForm";
import { userTypes } from "@/components/Welcome";
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
  userData: {
    _id: string;
    userName: string;
    userEmail: string;
    userImage: string;
    likedItemIds: string[];
    createdAt: string;
    updatedAt: string;
    __v: string;
  };
  error: string;
};

const initialState = {
  isLoading: false,
  allItems: [],
  userData: {
    _id: "",
    userName: "",
    userEmail: "",
    userImage: "",
    likedItemIds: [],
    createdAt: "",
    updatedAt: "",
    __v: "",
  },
  error: "",
} as categoryTypes;

const welcomePageSlice = createSlice({
  name: "welcomePageItems",
  initialState,
  reducers: {
    alldata: (state, action) => {
      state.allItems = action.payload;
    },
    userData: (state, action) => {
      state.userData = action.payload;
    },
    putLikes: (state, action) => {
      if (action.payload.logic === "plus") {
        state.allItems[action.payload.id].likes += 1;
      } else {
        state.allItems[action.payload.id].likes -= 1;
      }
    },
    putUserLikes: (state, action) => {
      state.userData.likedItemIds = action.payload;
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
export const { alldata, putLikes, userData, putUserLikes } =
  welcomePageSlice.actions;
