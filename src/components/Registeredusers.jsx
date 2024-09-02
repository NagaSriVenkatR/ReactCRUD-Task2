import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
const Registeredusers = ({ users ,setSelectedUser,setUsers }) => {
  const navigate = useNavigate();
  const handleEdit = (user) => {
    console.log("Editing user:", user);
    setSelectedUser(user);
    navigate('/form');
  }
  const handleDelete = (id) => {
    console.log("Deleting user with email:", id);
    setUsers(users.filter(user => user.id !== id))
  };
  return (
    <div className="container">
      <div className="row mt-4 justify-content-center mx-auto">
        <h2>Registered Users</h2>
        <div className="col-md-8">
          <table className="table table-bordered border-primary table-hover">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Full Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Password</th>
                {/* <th>Confirm Password</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.fullName}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  {/* <td>{user.confirmPassword}</td> */}
                  <td className="">
                    <button className="btn btn-light me-3" type="button" onClick={() => handleEdit(user)}>
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Registeredusers;
