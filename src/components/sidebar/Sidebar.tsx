import {
  FaUsers,
  FaHome,
  FaBriefcase,
  FaRegHandshake,
  FaPiggyBank,
  FaUserCheck,
  FaUserTimes,
  FaCoins,
  FaUserCog,
  FaScroll,
  FaChartBar,
  FaSlidersH,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { TbMoneybag } from "react-icons/tb";
import { LuBadgePercent } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import loan from "../../assets/Group 104.svg";
import savings from "../../assets/np_bank_148501_000000 1.svg";
import services from "../../assets/icon(7).svg";
import transaction from "../../assets/galaxy 1.svg";
import system from "../../assets/tire 1.svg";

export const Sidebar = () => {
  const location = useLocation();
  const isUserDetails = /^\/users\/[a-zA-Z0-9-]{10,}$/.test(location.pathname);

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li className="switch-org">
            <FaBriefcase />
            <span className="switch-text">
              Switch Organization
              <IoMdArrowDropdown />
            </span>
          </li>
          <li>
            <FaHome /> Dashboard
          </li>
          <li className="subject">
            <small>CUSTOMERS</small>
          </li>
          <li>
            <FaUsers />
            Guarantors
          </li>
          <li className="users">
            <HiUsers /> Users
          </li>
          <li>
            <TbMoneybag /> Loans
          </li>
          <li>
            <FaRegHandshake /> Decision Models
          </li>
          <li>
            <FaPiggyBank /> Savings
          </li>
          <li>
            <img src={loan} alt="loan-icon" /> Loan Request
          </li>
          <li>
            <FaUserCheck /> Whitelist
          </li>
          <li>
            <FaUserTimes /> Karma
          </li>
          <li>
            <small>BUSINESSES</small>
          </li>
          <li>
            <FaBriefcase /> Organization{" "}
          </li>
          <li>
            <img src={loan} alt="loan-icon" />
            Loan Products
          </li>
          <li>
            <img src={savings} alt="savings-icon" /> Savings Products
          </li>
          <li>
            <FaCoins /> Fees and Charges
          </li>
          <li>
            <img src={transaction} alt="transaction-icon" /> Transactions
          </li>
          <li>
            <img src={services} alt="services-icon" /> Services
          </li>
          <li>
            <FaUserCog /> Service Account
          </li>
          <li>
            <FaScroll /> Settlements
          </li>
          <li>
            <FaChartBar /> Report
          </li>
          <li>
            <small>SETTINGS</small>
          </li>
          <li>
            <FaSlidersH /> Preferences
          </li>
          <li>
            <LuBadgePercent /> Fees and Pricing
          </li>
          <li>
            <FaClipboardList /> Audit Logs
          </li>
          {isUserDetails && (
            <li>
              <img src={system} alt="system-icon" /> Systems Messages
            </li>
          )}

          <div className="down">
            {isUserDetails && (
              <li>
                <FaSignOutAlt /> Logout
              </li>
            )}
            {isUserDetails && <li>v1.2.0</li>}
          </div>
        </ul>
      </nav>
    </aside>
  );
};
