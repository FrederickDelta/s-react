import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar has-background-warning">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Picachu Time
          </Link>
        </div>
        <div className="navbar-menu navbar-end">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>
          <NavLink className="navbar-item" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
