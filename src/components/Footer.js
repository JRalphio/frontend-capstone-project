import Logo from "../icons-assets/Logo.svg";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer_section">
        <div classname="footer_section_title">
          <h2>Little Lemon</h2>
        </div>
        <div className="footer_section_links">
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
        </div>
      </div>
      <div className="footer_section">
        <div classname="footer_section_title">
          <h2>Contacts</h2>
        </div>
        <div className="footer_section_links">
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      <div className="footer_section">
        <div classname="footer_section_title">
          <h2>Social Media Links</h2>
        </div>
        <div className="footer_section_links">
          <ul>
            <li>
              <a href="#facebook"> Facebook</a>
            </li>
            <li>
              <a href="#instagram"> Instagram</a>
            </li>
            <li>
              <a href="#twitter"> Twitter</a>
            </li>
            <li>
              <a href="#youtube"> Youtube</a>
            </li>
            <li>
              <a href="#linkedin"> LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
