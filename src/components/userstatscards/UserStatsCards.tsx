import users from "../../assets/np_users_1248631_000000 1.svg";
import activeusers from "../../assets/icon(4).svg";
import userswithloans from "../../assets/icon(5).svg";
import userswithsavings from "../../assets/icon(6).svg";

import "./UserStatsCards.scss";

const cards = [
  {
    title: "USERS",
    value: "2,453",
    icon: <img src={users} alt="users-icon" />,
  },
  {
    title: "ACTIVE USERS",
    value: "2,453",
    icon: <img src={activeusers} alt="activeusers-icon" />,
  },
  {
    title: "USERS WITH LOANS",
    value: "12,453",
    icon: <img src={userswithloans} alt="userswithloans-icon" />,
  },
  {
    title: "USERS WITH SAVINGS",
    value: "102,453",
    icon: <img src={userswithsavings} alt="userswithsavings-icon" />,
  },
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
