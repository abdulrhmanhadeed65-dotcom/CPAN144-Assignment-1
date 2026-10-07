import WelcomeCard from "../components/WelcomeCard";
import Counter from "../components/Counter";
import StudentForm from "../components/StudentForm";

export default function Home() {
  return (
    <main>
      <h1>Student Dashboard</h1>

      <WelcomeCard name="Aboud" />

      <Counter />

      <StudentForm />
    </main>
  );
}