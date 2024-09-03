import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Registeredusers from "./components/Registeredusers";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser , setSelectedUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/form"
            element={
              <Form
                users={users}
                setUsers={setUsers}
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
              />
            }
          />
          <Route
            path="/users"
            element={
              <Registeredusers
                users={users}
                setSelectedUser={setSelectedUser}
                setUsers={setUsers}
              />
            }
          />
          <Route path="/" element={<Navigate to="/form" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
