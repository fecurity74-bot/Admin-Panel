import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "Test", email: "Test@mc.com", role: "Player" },
    { id: 2, name: "Test", email: "Test@mc.com", role: "Player" },
    { id: 3, name: "Test", email: "Test@mc.com", role: "Admin" },
  ]);

  const handleEdit = (id) => alert(`Edit user ${id}`);
  const handleDelete = (id) => setUsers(users.filter(u => u.id !== id));

  return (
    <div className="users-page">
      <h3>Users List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Role</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button className="edit-btn" onClick={() => handleEdit(u.id)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
