import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layout/DefaultLayout";
import HistoryPage from "./pages/History";
import HistoryDetailPage from "./pages/HistoryDetail";
import LoginPage from "./pages/Login";
import LoginLayout from "./layout/LoginLayout";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardPage from "./pages/Private/Dashboard";
import ReportDetailPage from "./pages/Private/ReportDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="/history/:id" element={<HistoryDetailPage />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="admin" element={<DashboardPage />} />
          <Route path="admin/:id" element={<ReportDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
