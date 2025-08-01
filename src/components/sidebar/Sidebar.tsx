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
} from "react-icons/fa";

import "./Sidebar.scss";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { TbMoneybag } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuBadgePercent } from "react-icons/lu";

export const Sidebar = () => {
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
            {" "}
            <small>CUSTOMERS</small>
          </li>
          <li>
            {" "}
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
            <FaHandHoldingDollar /> Loan Request
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
            <FaHandHoldingDollar />
            Loan Products
          </li>
          <li>
            <FaBriefcase /> Savings Products
          </li>
          <li>
            <FaCoins /> Fees and Charges
          </li>
          <li>
            <FaBriefcase /> Transactions
          </li>
          <li>
            <FaBriefcase /> Services
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
        </ul>
      </nav>
    </aside>
  );
};
