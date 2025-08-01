// src/pages/dashboard/Dashboard.tsx
import { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { UserStatsCards } from "../../components/userstatscards/UserStatsCards";
import { UsersTable } from "../../components/userstable/UsersTable";
import "./Dashboard.scss";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="dashboard-layout">
        <Sidebar />
        <main>
          <h2 className="dashboard-title">Users</h2>
          <UserStatsCards />
          <UsersTable searchTerm={searchTerm} />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
