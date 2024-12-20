// app/components/students/StudentForm.js
'use client';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../redux/slices/studentSlice';

const StudentForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { id: Date.now(), name: e.target.name.value };
        dispatch(addStudent(student));
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Student Name" required />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;