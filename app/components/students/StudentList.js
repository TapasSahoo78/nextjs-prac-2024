// app/components/students/StudentList.js
'use client';
import { useSelector, useDispatch } from 'react-redux';
import { removeStudent } from '../../redux/slices/studentSlice';

const StudentList = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name}
          <button onClick={() => dispatch(removeStudent(student.id))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default StudentList;