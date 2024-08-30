import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import Registeredusers from "./components/Registeredusers";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Form users={users} setUsers={setUsers} />}
          />
          <Route path="/users" element={<Registeredusers users={users} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
