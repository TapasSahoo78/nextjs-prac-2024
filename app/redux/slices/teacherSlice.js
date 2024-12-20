// app/redux/slices/teacherSlice.js
import { createSlice } from '@reduxjs/toolkit';

const teacherSlice = createSlice({
    name: 'teachers',
    initialState: [],
    reducers: {
        addTeacher: (state, action) => {
            state.push(action.payload);
        },
        removeTeacher: (state, action) => {
            return state.filter(teacher => teacher.id !== action.payload);
        },
    },
});

export const { addTeacher, removeTeacher } = teacherSlice.actions;
export default teacherSlice.reducer;