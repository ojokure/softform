import React from "react";
import StyledDashboard from "../Styles/DashboardStyles";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <h1 className="h1">
        {" "}
        Welcome to Softcom{" "}
        <span role="image" aria-label="closed">
          😁
        </span>
      </h1>
    </StyledDashboard>
  );
};

export default Dashboard;
