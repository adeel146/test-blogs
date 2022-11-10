import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      name: "Test1",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "",
    },
    {
      name: "Test2",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "",
    },
    {
      name: "Test2",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "",
    },
    {
      name: "Test3",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      image: "",
    },
  ],
};

export const counterSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBlog } = counterSlice.actions;

export default counterSlice.reducer;
