import { useState } from "react";

function Profile({ name, role }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h2>Intern Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {role}</p>

      <p><strong>Clicks:</strong> {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Profile;