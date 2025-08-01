import {
  FaUsers,
  FaUserCheck,
  FaPiggyBank,
  FaHandHoldingUsd,
} from "react-icons/fa";
import "./UserStatsCards.scss";

const cards = [
  { title: "USERS", value: "2,453", icon: <FaUsers /> },
  { title: "ACTIVE USERS", value: "2,453", icon: <FaUserCheck /> },
  { title: "USERS WITH LOANS", value: "12,453", icon: <FaHandHoldingUsd /> },
  { title: "USERS WITH SAVINGS", value: "102,453", icon: <FaPiggyBank /> },
];

export const UserStatsCards = () => {
  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="icon">{card.icon}</div>
          <p>{card.title}</p>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
};
