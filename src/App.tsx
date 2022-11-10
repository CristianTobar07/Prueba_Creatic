import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/Login">Login</Link>
      </nav>
    </div>
  );
};

export default App;
