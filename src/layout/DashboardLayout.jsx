import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import DashboardProvider, {
  useDashboard,
} from "../providers/DashboardProviders";
import ReactQueryProvider from "../providers/ReactQuery";

function LayoutContent() {
  const { userId, setUserId } = useDashboard();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/login", { replace: true });
      } else {
        setUserId(currentUser.uid);
      }
    });

    return () => unsubscribe();
  }, [navigate, setUserId]);

  if (!userId) return <div className="p-4">Loading...</div>;

  return (
    <div>
      {/* Optional sidebar / header */}
      <ReactQueryProvider>
        <Outlet />
      </ReactQueryProvider>
    </div>
  );
}

export default function DashboardLayout() {
  return (
    <DashboardProvider>
      <LayoutContent />
    </DashboardProvider>
  );
}
