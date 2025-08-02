import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import { RequireAuth } from "./utils/RequireAuth";
import UsersShowingFilters from "./pages/usersshowingfilters/UsersShowingFilters";
import UserDetails from "./pages/userdetails/UserDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="/users/filters" element={<UsersShowingFilters />} />
      <Route path="/users/:id" element={<UserDetails />} />
    </Routes>
  );
};

export default App;
