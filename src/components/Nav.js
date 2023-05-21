import Logo from "../icons-assets/Logo.svg";
import "../App.css";

const Nav = () => {
  return (
    <div className="navbars">
      <nav className="nav_logo">
        <img src={Logo} alt="Logo" />
      </nav>
      <nav className="nav_links">
        <ul>
          <li>
            <a href="#home"> Home</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#menu"> Menu</a>
          </li>
          <li>
            <a href="#reservations"> Reservations</a>
          </li>
          <li>
            <a href="#order-online"> Order Online</a>
          </li>
          <li>
            <a href="#login"> Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
