import { Link, Outlet } from "react-router-dom";

const about = () => {
  return (
    <div>
      <h1>This is about us page</h1>
      <Link to="profile">
        <button>Profile</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default about;
