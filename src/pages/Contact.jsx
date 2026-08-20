import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <h1>Contact Us</h1>

      <p>NYUS Restaurant</p>
      <p>Hyderabad</p>
      <p>Phone: 9876543210</p>
      <p>Email: nyusrestaurant@gmail.com</p>

      <Link to="/">Go to Home</Link>
    </>
  );
}

export default Contact;