import { useRouteError } from "react-router-dom";

const error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops! something went wrong</h1>
      <h2>Endpoint Invalid...</h2>
      <h3>{err.status}</h3>
      <h4>{err.statusText}</h4>
    </div>
  );
};

export default error;
