import "./UsersTable.scss";

export const UsersTable = () => {
  const users = [
    {
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone: "08090783317",
      date: "May 15, 2020",
      status: "Inactive",
    },
    {
      org: "Irorun",
      username: "Debby Ogana",
      email: "debby@irorun.com",
      phone: "08099780924",
      date: "Apr 20, 2020",
      status: "Pending",
    },
    // more...
  ];

  return (
    <div className="users-table">
      <table>
        <thead>
          <tr>
            <th>ORGANIZATION</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>PHONE NUMBER</th>
            <th>DATE JOINED</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={index}>
              <td>{u.org}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.date}</td>
              <td>
                <span className={`status ${u.status.toLowerCase()}`}>
                  {u.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
