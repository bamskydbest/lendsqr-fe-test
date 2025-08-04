import "./UsersTable.scss";
import { useEffect, useRef, useState } from "react";
import filter from "../../assets/filter-results-button.svg";
import ic from "../../assets/ic-more-vert-18px.svg";
import { Link } from "react-router-dom";

type User = {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
};

type Filters = {
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: string;
};

type Props = {
  filters: Filters;
  searchTerm: string;
  onFilterClick: () => void;
};

export const UsersTable = ({ filters, searchTerm, onFilterClick }: Props) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const menuRef = useRef<HTMLDivElement>(null);
  const [openMenuUserId, setOpenMenuUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://gist.githubusercontent.com/bamskydbest/68bbff9adcd2fe64bd1f912391340c8d/raw/874e299834e4a226e0436f545a7b66d9610e4992/gistfile1.txt"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setError(null);
      } catch (err) {
        setError("Failed to load users. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) => {
      const matchesFilters =
        (!filters.organization ||
          user.organization
            .toLowerCase()
            .includes(filters.organization.toLowerCase())) &&
        (!filters.username ||
          user.username
            .toLowerCase()
            .includes(filters.username.toLowerCase())) &&
        (!filters.email ||
          user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (!filters.phone || user.phone.includes(filters.phone)) &&
        (!filters.dateJoined || user.dateJoined === filters.dateJoined) &&
        (!filters.status ||
          user.status.toLowerCase() === filters.status.toLowerCase());

      const matchesSearch =
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesFilters && (!searchTerm || matchesSearch);
    });
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [filters, searchTerm, users]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuUserId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const indexOfLastUser = currentPage * rowsPerPage;
  const indexOfFirstUser = indexOfLastUser - rowsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 4) {
        pageNumbers.push("...");
      }

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 4) {
        startPage = 2;
        endPage = 5;
      } else if (currentPage > totalPages - 4) {
        startPage = totalPages - 4;
        endPage = totalPages - 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < totalPages - 3) {
        pageNumbers.push("...");
      }
      if (!pageNumbers.includes(totalPages)) {
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((num, index) =>
      typeof num === "string" ? (
        <span key={index}>{num}</span>
      ) : (
        <button
          key={index}
          className={num === currentPage ? "active" : ""}
          onClick={() => paginate(num)}
        >
          {num}
        </button>
      )
    );
  };

  if (loading) {
    return (
      <div className="users-table-container">
        <div className="users-table-card loading">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="users-table-container">
        <div className="users-table-card error">{error}</div>
      </div>
    );
  }

  return (
    <div className="users-table-container">
      <div className="users-table-card">
        <table>
          <thead>
            <tr>
              <th>
                <div className="header-content" onClick={onFilterClick}>
                  <span>ORGANIZATION</span>
                  <img src={filter} alt="filter-icon" />
                </div>
              </th>
              <th>
                <div className="header-content" onClick={onFilterClick}>
                  <span>USERNAME</span>
                  <img src={filter} alt="filter-icon" />
                </div>
              </th>
              <th>
                <div className="header-content" onClick={onFilterClick}>
                  <span>EMAIL</span>
                  <img src={filter} alt="filter-icon" />
                </div>
              </th>
              <th>
                <div className="header-content" onClick={onFilterClick}>
                  <span>PHONE NUMBER</span>
                  <img src={filter} alt="filter-icon" />
                </div>
              </th>
              <th>
                <div className="header-content" onClick={onFilterClick}>
                  <span>DATE JOINED</span>
                  <img src={filter} alt="filter-icon" />
                </div>
              </th>
              <th>
                <div className="header-content" onClick={onFilterClick}>
                  <span>STATUS</span>
                  <img src={filter} alt="filter-icon" />
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td className="email">{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.dateJoined}</td>
                  <td>
                    <span className={`status ${user.status.toLowerCase()}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="actions-cell">
                    <div className="popup-wrapper" ref={menuRef}>
                      <div className="menu-container">
                        <div
                          className="menu-icon"
                          onClick={() =>
                            setOpenMenuUserId(
                              openMenuUserId === user.id ? null : user.id
                            )
                          }
                        >
                          <img src={ic} alt="menu-icon" />
                        </div>
                      </div>

                      {openMenuUserId === user.id && (
                        <div className="popup-menu" ref={menuRef}>
                          <Link to={`/users/${user.id}`}>
                            <button
                              onClick={() => {
                                setOpenMenuUserId(null);
                              }}
                            >
                              View Details
                            </button>
                          </Link>

                          <button>Blacklist User</button>
                          <button>Activate User</button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <div className="table-controls">
          <span>Showing</span>
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(parseInt(e.target.value));
              setCurrentPage(1);
            }}
          >
            {[10, 20, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <span>out of {filteredUsers.length}</span>
        </div>
        <div className="page-controls">
          <button onClick={() => paginate(Math.max(currentPage - 1, 1))}>
            &lt;
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => paginate(Math.min(currentPage + 1, totalPages))}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
