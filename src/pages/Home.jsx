import { Link } from "react-router-dom"

function Home() {
  return (
    <section className="container">

      <img
        src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600&auto=format&fit=crop&q=60"
        alt="Food"
      />

      <div className="navbar">

        <div className="logo">
          <div className="circle"></div>
          <h1>NYUS</h1>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/menu">Menu</Link>
          </li>

          <li>
            <Link to="/testimonial">Testimonial</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Link to="/contact" className="btn">
          RESERVATION
        </Link>

      </div>

      <div className="content">

        <h2>Welcome to Our NYUS</h2>

        <h3>GOOD PLACE. GOOD FOOD.</h3>

        <h1>
          A Really Good Place to Eat
          <br />
          In the City of Hyderabad
        </h1>

        <p>
          Experience the finest flavors crafted with fresh ingredients,
          warm hospitality, and an unforgettable dining atmosphere.
        </p>

      </div>

      <div className="scroll">
        <div>Scroll Down</div>
      </div>

    </section>
  );
}

export default Home;