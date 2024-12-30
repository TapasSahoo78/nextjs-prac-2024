import StudentList from '../components/students/StudentList';
import StudentForm from '../components/students/StudentForm';

export default function Student() {
    return (
        <div>
            <h1>Student Management</h1>
            <StudentForm />
            <StudentList />
        </div>
    );
}
