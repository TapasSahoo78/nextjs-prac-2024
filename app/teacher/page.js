import TeacherList from '../components/teachers/TeacherList';
import TeacherForm from '../components/teachers/TeacherForm';

export default function Teacher() {
    return (
        <div>
            <h1>Teacher Management</h1>
            <TeacherForm />
            <TeacherList />
        </div>
    );
}
