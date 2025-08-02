// src/pages/dashboard/Dashboard.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { UserStatsCards } from "../../components/userstatscards/UserStatsCards";
import { UsersTable } from "../../components/userstable/UsersTable";
import "./Dashboard.scss";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleFilterClick = () => {
    navigate("/users/filters");
  };

  return (
    <div className="">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="dashboard-layout">
        <Sidebar />
        <main>
          <div className="dashboard-header">
            <h2 className="dashboard-title">Users</h2>
            <button className="filter-users-button" onClick={handleFilterClick}>
              Filter Users
            </button>
          </div>

          <UserStatsCards />
          <UsersTable
            searchTerm={searchTerm}
            filters={{
              organization: "",
              username: "",
              email: "",
              dateJoined: "",
              phone: "",
              status: "",
            }}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
