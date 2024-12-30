import { createSlice } from '@reduxjs/toolkit';

const classSlice = createSlice({
    name: 'classes',
    initialState: [],
    reducers: {
        // Create a new class
        addClass: (state, action) => {
            state.push(action.payload); // Add the new class to the state
        },
        // Update an existing class
        updateClass: (state, action) => {
            const index = state.findIndex((classItem) => classItem.id === action.payload.id);
            if (index !== -1) {
                state[index] = { ...state[index], ...action.payload }; // Update the class with new data
            }
        },
        // Delete a class
        removeClass: (state, action) => {
            return state.filter((classItem) => classItem.id !== action.payload.id); // Remove the class by id
        }
    }
});

// Export actions
export const { addClass, updateClass, removeClass } = classSlice.actions;

// Export the reducer
export default classSlice.reducer;