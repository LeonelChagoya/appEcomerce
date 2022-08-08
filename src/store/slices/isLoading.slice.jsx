import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: true,
  reducers: {
    setIsLoading: (state, action) => {
      const isLoading = action.payload;
      return isLoading;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
