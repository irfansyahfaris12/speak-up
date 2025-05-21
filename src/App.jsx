import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layout/DefaultLayout";
import HistoryPage from "./pages/History";
import HistoryDetailPage from "./pages/HistoryDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="/history/:id" element={<HistoryDetailPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
