import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Navbar } from "../../components/navbar/Navbar";
import { UserStatsCards } from "../../components/userstatscards/UserStatsCards";
import { UsersTable } from "../../components/userstable/UsersTable";
import "./UsersShowingFilters.scss";

const UsersShowingFilters = () => {
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    dateJoined: "",
    phone: "",
    status: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      dateJoined: "",
      phone: "",
      status: "",
    });
  };

  return (
    <div className="users-filter-screen">
      <Sidebar />

      <div className="main-content">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <h1 className="page-title">Users</h1>
        <UserStatsCards />

        <div className="filters-card">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="filter-group">
              <label>Organization</label>
              <select
                name="organization"
                value={filters.organization}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Lendsqr">Lendsqr</option>
                <option value="Irorun">Irorun</option>
              </select>
            </div>
            <div className="filter-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="User"
                value={filters.username}
                onChange={handleChange}
              />
            </div>
            <div className="filter-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={filters.email}
                onChange={handleChange}
              />
            </div>
            <div className="filter-group">
              <label>Date</label>
              <input
                type="date"
                name="dateJoined"
                value={filters.dateJoined}
                onChange={handleChange}
              />
            </div>
            <div className="filter-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={filters.phone}
                onChange={handleChange}
              />
            </div>
            <div className="filter-group">
              <label>Status</label>
              <select
                name="status"
                value={filters.status}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="blacklisted">Blacklisted</option>
              </select>
            </div>
            <div className="filter-buttons">
              <button type="button" className="reset-btn" onClick={handleReset}>
                Reset
              </button>
              <button type="submit" className="filter-btn">
                Filter
              </button>
            </div>
          </form>
        </div>

        <UsersTable filters={filters} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default UsersShowingFilters;
