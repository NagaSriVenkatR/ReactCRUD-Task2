import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { TiUserDelete } from "react-icons/ti";
import { FiRefreshCcw } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineCalendarViewMonth } from "react-icons/md";
import "./register.css"
const Registeredusers = ({ users ,setSelectedUser,setUsers }) => {
  const navigate = useNavigate();
  const handleEdit = (user) => {
    console.log("Editing user:", user);
    setSelectedUser(user);
    navigate('/form');
  }
  const handleDelete = (email) => {
    console.log("Deleting user with email:", email);
    setUsers(users.filter(user => user.email !== email))
  };
  return (
    <div className="container">
      <div className="row mt-4 justify-content-center mx-auto">
        <div className="col-md-12 col-lg-10 col-xxl-9">
          <div className="description">
            <h2>Registered Users</h2>
          </div>
          <div className="fresh-table">
            <div className="fixed-table-toolbar d-flex justify-content-between mx-3">
              <div className="pull-name">
                <div className="toolbar">
                  <button id="alertBtn" className="btn btn-default">
                    Alert
                  </button>
                </div>
              </div>
              <div className="columns columns-right btn-group pull-right">
                <input
                  className="form-control search-input text-white d-none d-md-block"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn btn-default">
                  <FiRefreshCcw />
                </button>
                <button className="btn btn-default">
                  {" "}
                  <MdOutlineCalendarViewMonth />
                </button>
                <button className="btn d-flex btn-default pt-3">
                  <CgMenuGridR />
                  <FaCaretDown />
                </button>
              </div>
            </div>
            <div className="ms-5 me-2 mb-3">
              <input
                className="form-control search-input text-white d-block d-md-none"
                type="search"
                placeholder="Search"
              />
            </div>
            <div className="fixed-table-container">
              <div className="fixed-table-header d-none"></div>
              <div className="fixed-table-body">
                <table
                  className="table table-hover table-striped"
                  style={{ overflowX: "auto" }}
                >
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>PhoneNumber</th>
                      <th>Email</th>
                      <th>Password</th>
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
                        <td className=" fs-4 justify-content-evenly">
                          <FaUserEdit
                            className="text-success"
                            onClick={() => handleEdit(user)}
                          />
                          <TiUserDelete
                            className="text-danger"
                            onClick={() => handleDelete(user.email)}
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
