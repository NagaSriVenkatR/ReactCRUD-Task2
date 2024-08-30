import React from 'react'
const Registeredusers = ({users}) => {

  return (
    <div className="container">
      <div className="row mt-4">
        <h2>Registered Users</h2>
        <table className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Full Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={index} >
                <td>{index+1}</td>
                <td>{user.fullName}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.confirmPassword}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Registeredusers
