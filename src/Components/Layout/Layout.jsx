import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0B1020]">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar />
        <main
          className="flex-1 min-h-0 overflow-y-auto px-3 pb-4"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;