import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <h1>Our Menu</h1>

      <h2>Appetizers</h2>
      <p>Chicken 65</p>
      <p>Paneer Tikka</p>

      <h2>Main Course</h2>
      <p>Afghani Chicken</p>
      <p>Butter Naan</p>
      <p>Chicken Biryani</p>

      <h2>Desserts</h2>
      <p>Ice Cream</p>
      <p>Gulab Jamun</p>

      <Link to="/">Go to Home</Link>
    </>
  );
}

export default Menu;