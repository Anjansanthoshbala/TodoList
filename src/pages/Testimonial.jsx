import { Link } from "react-router-dom";

function Testimonial() {
  return (
    <>
      <h1>Testimonials</h1>

      <p>"Amazing food and excellent service!"</p>
      <p>"One of the best restaurants in Hyderabad."</p>

      <Link to="/">Go to Home</Link>
    </>
  );
}

export default Testimonial;