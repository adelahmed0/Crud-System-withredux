import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: function (state, action) {
            state.items.push(action.payload)
        },
        deletePost: function (state, action) {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updatePost: function (state, action) {
            // eslint-disable-next-line array-callback-return
            state.items.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title;
                    item.description = action.payload.description;
                }
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const { addPost, deletePost, updatePost } = postsSlice.actions

export default postsSlice.reducer