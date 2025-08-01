import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { UserStatsCards } from "../../components/userstatscards/UserStatsCards";
import { UsersTable } from "../../components/userstable/UsersTable";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <div className="dashboard-layout">
        <Sidebar />
        <main>
          <h2 className="dashboard-title">Users</h2>
          <UserStatsCards />
          <UsersTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
