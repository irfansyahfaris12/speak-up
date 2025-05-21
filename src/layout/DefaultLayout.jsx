import { Outlet } from "react-router-dom";
import BottomNavigationBar from "../components/organisms/BottomNavigationBar";
import ReactQueryProvider from "../providers/ReactQuery";
import DataProvider from "../providers/DataProviders";

const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      {/* <header className="py-4 px-4 shadow bg-white sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-center text-gray-800">Aplikasi Pengaduan</h1>
      </header> */}

      {/* Main Content via Outlet */}
      <DataProvider>
        <ReactQueryProvider>
          <main className="flex-1 overflow-y-auto p-4">
            <Outlet />
          </main>
        </ReactQueryProvider>
      </DataProvider>

      {/* Bottom Navigation */}
      <BottomNavigationBar />
    </div>
  );
};

export default DefaultLayout;
