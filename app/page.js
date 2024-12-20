import Image from "next/image";
import styles from "./page.module.css";
import StudentForm from './components/students/StudentForm';
import StudentList from './components/students/StudentList';

export default function Home() {
  return (
    <div>
      <h1>Student Management</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
}
