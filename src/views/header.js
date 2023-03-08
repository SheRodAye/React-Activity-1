import "../index";
import "./header.css";

function Header() {
  return (
    <div className="fixed-top header">
      <div className="logoTittlle">SRA</div>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Header;