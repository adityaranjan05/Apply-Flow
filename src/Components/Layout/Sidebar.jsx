import { NavLink } from "react-router";

const pages = {
    "/" : "Dashboard",
    "/applications" : "Applications",
    "/kanban" : "Kanban Board",
    "/analytics" : "Analytics",
}

function Sidebar() {
    return (
        <aside
            className="px-3 py-4 shrink-0 h-screen"
        >
            <nav 
                className="bg-[#0F172A] border border-[#27324A] px-5 py-6 w-64 h-full flex flex-col rounded-2xl shadow-lg"
            >
                <div
                    className="flex gap-3 w-full justify-center h-fit items-center shrink-0"
                >
                    <div
                        className="h-13 w-13 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-indigo-500/20"
                    >
                        <img
                            src="/logo.png"
                            alt="ApplyFlow logo"
                            className="h-10 w-10 object-contain"
                        />
                    </div>

                    <h1 
                        className="text-[#F8FAFC] text-2xl font-semibold"
                    >
                        ApplyFlow
                    </h1>
                </div>

                <div
                    className="flex flex-col gap-2 mt-10 w-full"
                >
                    {
                        Object.entries(pages).map(([path, title]) => {
                            return (
                                <NavLink
                                    to={path}
                                    key={path}
                                    end={path === "/"}
                                    className={({ isActive }) => 
                                        `flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors duration-200 ${
                                            isActive 
                                                ? "bg-gradient-to-r from-[#252653] to-[#312E81] text-white  hover:from-[#312E81] hover:to-[#4338CA]" 
                                                : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                                        }`
                                    }
                                >
                                    {title}
                                </NavLink>
                            )
                        })
                    }
                    {/* <NavLink
                        to="/"
                        end
                        className={({ isActive }) => 
                            `flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors duration-200 ${
                                isActive 
                                    ? "bg-gradient-to-r from-[#252653] to-[#312E81] text-white  hover:from-[#312E81] hover:to-[#4338CA]" 
                                    : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                            }`
                        }
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        to="/applications"
                        end={false}
                        className={({ isActive }) => 
                            `flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors duration-200 ${
                                isActive 
                                    ? "bg-gradient-to-r from-[#252653] to-[#312E81] text-white  hover:from-[#312E81] hover:to-[#4338CA]" 
                                    : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                            }`
                        }
                    >
                        Applications
                    </NavLink>
                    <NavLink
                        to="/kanban"
                        className={({ isActive }) => 
                            `flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors duration-200 ${
                                isActive 
                                    ? "bg-gradient-to-r from-[#252653] to-[#312E81] text-white  hover:from-[#312E81] hover:to-[#4338CA]" 
                                    : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                            }`
                        }
                    >
                        Kanban Board
                    </NavLink>
                    <NavLink
                        to="/analytics"
                        className={({ isActive }) => 
                            `flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors duration-200 ${
                                isActive 
                                    ? "bg-gradient-to-r from-[#252653] to-[#312E81] text-white  hover:from-[#312E81] hover:to-[#4338CA]" 
                                    : "text-[#94A3B8] hover:bg-[#1E293B] hover:text-[#F8FAFC]"
                            }`
                        }
                    >
                        Analytics
                    </NavLink> */}
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;