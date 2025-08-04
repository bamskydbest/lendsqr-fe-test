# Lendsqr Admin Dashboard Clone

A pixel-perfect admin dashboard built with React, TypeScript, SCSS, and React Router, inspired by the Lendsqr UI design on Figma.

## 🚀 Features Implemented

### ✅ Authentication

- **Login Page**: Only users with correct credentials can access the dashboard.
- **Route Protection**: `RequireAuth` HOC component restricts access to protected routes based on authentication status stored in localStorage. If a user is not authenticated, they are redirected to the login page.

### ✅ Dashboard

- **Responsive Layout**: Flexbox-based structure with `Sidebar`, `Navbar`, and `main` sections.
- **User Stats Cards**: Dynamically displayed summary cards with user-related stats.
- **Filter Users Button**: Redirects to an advanced filter UI for user management.

### ✅ Users Table

- Displays a list of mock users with the following fields:

  - Organization
  - Username
  - Email
  - Phone Number
  - Date Joined
  - Status

- **Functionality Includes**:

  - Dynamic search by username
  - Table row dropdowns for user actions: View Details, Blacklist, Activate
  - Pagination to manage long lists

### ✅ Filter Popup Page

- Activated by `Filter Users` button
- A reusable filter form UI positioned above the table, occupying the first two columns
- Filters by: Organization, Username, Email, Date Joined, Phone Number, Status
- Fully responsive layout using CSS Grid and media queries

### ✅ User Details Page

- Accessed by clicking `View Details` in a user row dropdown
- Displays user’s general information and account details based on their ID from the route param
- Structured layout with header, sections, and tabs (if extended)

### ✅ Styling and Theming

- SCSS Modules with a shared `_variables.scss` for consistent color and spacing:

```scss
$primary-color: #39cdcc;
$secondary-color: #213f7d;
$text-color: #545f7d;
$input-border: #ccc;
$bg-light: #fff;
$green: #39cd62;
$red: #e4033b;
$yellow: #e9b200;
```

- Fonts: [Inter](https://fonts.google.com/specimen/Inter)
- Responsive Design: All pages adapt from desktop to mobile

## 🧠 Approach & Decisions

This project was built from scratch with the goal of strictly matching the Lendsqr Figma design. Key decisions made include:

- **Mock API Data**: To simulate real user data, I generated JSON using [json-generator.com](https://json-generator.com/) with the following query:

```json
[
  "{{repeat(50)}}",
  {
    "id": "{{index(1)}}",
    "organization": "{{company().toUpperCase()}}",
    "username": "{{firstName()}}",
    "email": "{{email()}}",
    "phone": "+234{{phone(\"8000000000\")}}",
    "dateJoined": "{{date(\"2023-01-01\", \"2024-12-31\", \"YYYY-MM-DD\")}}",
    "status": "{{random(\"Active\", \"Inactive\", \"Blacklisted\", \"Pending\")}}"
  }
]
```

- The mock data is hosted on [gist.github.com](https://gist.github.com) as a public JSON and fetched directly using `fetch()`.
- **Routing Strategy**: `React Router v6` was used for clean and modular route management. The `RequireAuth` utility was used to guard routes that require login.
- **Reusable Components**: Navbar, Sidebar, UserStatsCards, and the Filter Form are all reusable components to ensure DRY code and maintainability.
- **Responsive Design Choices**: Media queries and grid systems were used to keep all components usable across device sizes.
- **Dropdown Outside Click Logic**: Event listeners close open popups if the user clicks outside the dropdown, enhancing UX.

## 🛠️ Technologies Used

- **React.js** (with functional components and hooks)
- **TypeScript** (for type safety)
- **React Router v6** (for client-side routing)
- **SCSS** (modular styling)
- **Mock API** from `json-generator.com` (hosted on GitHub Gist)

## 📁 Project Structure Overview

```bash
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── navbar/
│   │   ├── sidebar/
│   │   ├── userstatscards/
│   │   ├── userstable/
│   ├── pages/
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── usersshowingfilters/
│   │   ├── userdetails/
│   ├── styles/
│   │   ├── _variables.scss
│   │   └── global.scss
│   ├── utils/
│   │   └── RequireAuth.tsx
│   ├── App.tsx
│   └── main.tsx
```

## 📦 Installation

```bash
git clone https://github.com/your-username/lendsqr-dashboard.git
cd lendsqr-dashboard
npm install
npm run dev
```

## 🔒 Login Credentials

Use any non-empty credentials. (Can be extended with real API in production.)

## 📘 Future Improvements

- Integrate real backend API
- Add user tab views in UserDetails (e.g., Loans, Documents)
- Form validation and error messages
- Loading states and skeleton UIs

## 👨‍💻 Author

**Dev Mahmoud**
Frontend Developer & Instructor @ One Innovation Hub Offa

## 🧾 License

This project is licensed for educational and portfolio purposes.

---

Feel free to fork this repository and contribute!
