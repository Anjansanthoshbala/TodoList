import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About NYUS</h1>

      <p>
        Welcome to NYUS Restaurant. We provide delicious food
        and a wonderful dining experience.
      </p>

      <Link to="/">Go to Home</Link>
    </>
  );
}

export default About;