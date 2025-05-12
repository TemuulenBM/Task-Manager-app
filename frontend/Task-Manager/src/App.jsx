import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/Admin/Dashboard';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={[<Login/>]} />
          <Route path="/signUp" element={[<SignUp/>]} />

          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
