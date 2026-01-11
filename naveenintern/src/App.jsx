
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./page/ProfilePage";
import Form from "./page/Form.jsx";

function Home() {
  return <h2>Home Page</h2>;
}

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/form">Form</Link>
      </nav>

      <Routes>
        <Route path="/form" element={<Form />} />
        <Route
          path="/profile"
          element={<Profile name="Naveen" role="Intern" />}
        />
      </Routes>
    </div>
  );
}

export default App;