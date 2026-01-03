import { Routes, Route, Link } from "react-router-dom";
import Profile from "./page/ProfilePage";

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={<Profile name="Naveen" role="Intern" />}
        />
      </Routes>
    </div>
  );
}

export default App;