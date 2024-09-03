import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import { FiRefreshCcw } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import "./register.css"
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
        <div className="col-md-8 col-md-offset-2">
          <div className="description">
            <h2>Registered Users</h2>
          </div>
          <div className="fresh-table">
            <div className="fixed-table-toolbar d-flex">
              <div className="pull-name">
                <div className="toolbar">
                  <button id="alertBtn" className="btn btn-default">
                    Alert
                  </button>
                </div>
              </div>
              <div className="pull-right search input-group mx-5">
                <input
                  className="form-control search-input"
                  type="search"
                  placeholder="Search"
                />
              </div>
              <div className="columns columns-right btn-group pull-right">
                <button className="btn btn-default">
                  <FiRefreshCcw />
                </button>
                <button className="btn btn-default">
                  {" "}
                  <MdOutlineCalendarViewMonth />
                </button>
                <div className="keep-open btn-group">
                  <button className="btn btn-default">
                    <CgMenuGridR />
                  </button>
                </div>
              </div>
            </div>
            <div className="fixed-table-container">
              <div className="fixed-table-header d-none"></div>
              <div className="fixed-table-body">
                <table className="" style={{ overflowX: "auto" }}>
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
                        <td className="d-flex fs-4 justify-content-evenly">
                          <FaUserEdit
                            className="text-success"
                            onClick={() => handleEdit(user)}
                          />
                          <TiUserDelete
                            className="text-danger"
                            onClick={() => handleDelete(user.id)}
                          />
                          {/* <button
                      className="btn btn-light me-3"
                      type="button"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      type="button"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registeredusers;
