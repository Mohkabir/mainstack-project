import { useEffect, useState } from "react";
import "./Dashboard.scss";

const Users = () => {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <div className="welcome">
        <h2>Good morning, Blessing ⛅️</h2>
        <span>View analytics</span>
      </div>
      <p>Check out your dashboard summary.</p>

      <div className="nav">
        <button type="button">1 Day</button>
        <button type="button">3 Days</button>
        <button type="button">7 Days</button>
        <button type="button">30 Days</button>
        <button type="button" className="active">
          All Time
        </button>
        <button type="button">Custom Date</button>
      </div>
    </div>
  );
};

export default Users;
