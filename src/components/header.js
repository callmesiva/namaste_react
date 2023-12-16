import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      id="title"
      alt="site logo"
      src="https://images-platform.99static.com/1W6O3GChptWgF3mnpDKkr5SbKCw=/90x84:882x876/500x500/top/smart/99designs-contests-attachments/74/74315/attachment_74315262"
    />
  </a>
);
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
