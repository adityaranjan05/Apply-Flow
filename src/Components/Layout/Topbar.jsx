import { Bell } from "lucide-react";
import { useLocation } from "react-router";

const pageTitles = {
    "/" : "Dashboard",
    "/applications" : "Applications",
    "/kanban" : "Kanban Board",
    "/analytics" : "Analytics",
}

function Topbar () {
    const location = useLocation();
    const title = pageTitles[location.pathname] || "Application Details";

    return (
        <header
            className="px-3 pt-4 pb-4 shrink-0"
        >
            <div
                className="bg-[#0F172A] border border-[#27324A] px-5 py-3 rounded-xl flex justify-between"
            >
                <div>
                    <h1
                        className="text-sm text-[#F8FAFC]"
                    >
                        {title}
                    </h1>
                    <p
                        className="text-sm text-[#94A3B8]"
                    >
                        Welcome back! Here's your application overview.
                    </p>
                </div>
                <div
                    className="flex gap-4 items-center"
                >
                    <button
                        className="p-2 rounded-xl bg-[#1E293B] text-[#94A3B8] hover:bg-[#334155] hover:text-[#F8FAFC] transition-colors duration-200 cursor-pointer"
                        aria-label="Notifications"
                    >
                        <Bell  size={20}/>
                    </button>
                    <button 
                        className="h-9 w-9 rounded-full bg-[#312E81] hover:bg-[#3d3aa1] text-[#C7D2FE] hover:text-white flex items-center justify-center font-semibold transition-colors cursor-pointer"
                    >
                        A
                    </button>
                </div>
            </div>
        </header>
    )
}
export default Topbar;