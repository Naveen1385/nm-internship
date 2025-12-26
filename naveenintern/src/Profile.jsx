function Profile({ name, role }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
      <h2>Intern Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
}

export default Profile;