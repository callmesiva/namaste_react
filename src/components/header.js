import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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
