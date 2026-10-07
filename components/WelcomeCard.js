export default function WelcomeCard(props) {
  return (
    <div className="card">
      <h2>Welcome, {props.name}!</h2>
      <p>Welcome to my CPAN144 Assignment 1 project.</p>
    </div>
  );
}