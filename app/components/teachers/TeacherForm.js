// app/components/students/StudentForm.js
'use client';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../redux/slices/studentSlice';

const TeacherForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();

        const student = { id: Date.now(), name: e.target.name.value };
        console.log(student);
        dispatch(addStudent(student));
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Teacher Name" required />
            <button type="submit">Add Teacher</button>
        </form>
    );
};

export default TeacherForm;