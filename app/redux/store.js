// app/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './slices/studentSlice';
import teacherReducer from './slices/teacherSlice';
import classReducer from './slices/classSlice';

const store = configureStore({
    reducer: {
        students: studentReducer,
        teachers: teacherReducer,
        classes: classReducer
    },
});

export default store;