import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export function useDashboard() {
  return useContext(DashboardContext);
}

export default function DashboardProvider({ children }) {
  const [userId, setUserId] = useState(null);

  return (
    <DashboardContext.Provider value={{ userId, setUserId }}>
      {children}
    </DashboardContext.Provider>
  );
}
