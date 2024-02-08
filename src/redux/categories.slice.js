import { createSlice} from "@reduxjs/toolkit";
import {CategoriesName} from "./categories.type"

const initialState = CategoriesName.All;

export const categoriesSlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            return action.payload;
        },
    },
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
