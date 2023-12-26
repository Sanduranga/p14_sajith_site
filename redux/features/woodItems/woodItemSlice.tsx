import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// export const fetchWooditems = createAsyncThunk(
//   "woodItems/fetchData",
//   async () => {
//     const category = "kitchen";
//     const res = await fetch(
//       `http://localhost:3000/api/wood_hub?category=${category}`,
//       {
//         cache: "no-store",
//       }
//     );
//     const { items } = await res.json();
//     return { items, category };
//   }
// );

export type categoryTypes = {
  isLoading: boolean;
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
  living: [],
  kitchen: [],
  bathroom: [],
  outdoor: [],
  entryFoyer: [],
  bedroom: [],
  office: [],
  dining: [],
  error: "",
} as categoryTypes;

const woodItemsSlice = createSlice({
  name: "woodItems",
  initialState,
  reducers: {},
  //   extraReducers(builder) {
  //     builder.addCase(fetchWooditems.pending, (state, action) => {
  //       state.isLoading = true;
  //     }),
  //       builder.addCase(fetchWooditems.fulfilled, (state, action) => {
  //         const category = action.payload.category;
  //         if (category === "kitchen") state.kitchen = action.payload.items;
  //         else if (category === "living") state.living = action.payload.items;
  //         else if (category === "outdoor") state.outdoor = action.payload.items;
  //         else if (category === "entryFoyer")
  //           state.entryFoyer = action.payload.items;
  //         else if (category === "bathroom") state.bathroom = action.payload.items;
  //         else if (category === "bedroom") state.bedroom = action.payload.items;
  //         else if (category === "office") state.office = action.payload.items;
  //         else if (category === "dining") state.dining = action.payload.items;
  //         state.isLoading = false;
  //       }),
  //       builder.addCase(
  //         fetchWooditems.rejected,
  //         (state, action: PayloadAction<any>) => {
  //           state.isLoading = false;
  //           state.error = action.payload.message;
  //         }
  //       );
  //   },
});

export default woodItemsSlice.reducer;
