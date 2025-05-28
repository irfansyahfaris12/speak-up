import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      {/* <header className="py-4 px-4 shadow bg-white sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-center text-gray-800">Aplikasi Pengaduan</h1>
      </header> */}

      {/* Main Content via Outlet */}
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default LoginLayout;
