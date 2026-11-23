import { useContext } from "react";
import ApplicationContext from "../../context/ApplicationContext";
import { History } from "lucide-react";

const statusStyles = {
    Applied: "text-blue-400 bg-blue-400/10 border border-blue-400/20",
    Assessment: "text-amber-400 bg-amber-400/10 border border-amber-400/20",
    Interview: "text-purple-400 bg-purple-400/10 border border-purple-400/20",
    Offer: "text-emerald-400 bg-emerald-400/10 border border-emerald-400/20",
    Rejected: "text-red-400 bg-red-400/10 border border-red-400/20",
};

const RecentApplications = () => {
    const { applications } = useContext(ApplicationContext);
    const recentApplications = applications.slice(-5).reverse();

    const getLocalDate = (dateString) => {
        const [year, month, day] = dateString.split("-").map(Number);
        return new Date(year, month - 1, day);
    };

    return (
        <div className="bg-[#151D32] border border-[#27324A] rounded-2xl p-5 hover:border-[#4c628d] transition-all duration-200 space-y-4 min-h-87.5 max-h-87.5">
            <div className="flex gap-3 items-center">
                <History size={40} className="text-[#818CF8]" />
                <div>
                    <h2 className="text-[#F8FAFC] text-lg font-semibold">
                        Recent Applications
                    </h2>
                    <p className="text-[#94A3B8] text-sm mt-1">
                        Keep track of your latest job applications and their progress.
                    </p>
                </div>
            </div>
            <div className="space-y-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-50 pr-3">
                {applications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <History size={36} className="text-[#818CF8] mb-3" />
                        <h3 className="text-white font-medium">
                            No applications yet
                        </h3>
                        <p className="text-[#94A3B8] text-sm mt-1">
                            Your recent job applications will appear here.
                        </p>
                    </div>
                ) : (
                    recentApplications.map((application) => (
                        <div
                            className="flex justify-between items-center bg-amber-50/2 hover:bg-amber-50/3 p-3 rounded-2xl border border-[#2a3a5c] hover:border-[#4c628d] transition-all duration-200"
                            key={application.id}
                        >
                            <div>
                                <h2 className="text-white">
                                    {application.company}
                                </h2>
                                <p className="text-amber-50/50 text-sm">
                                    {application.description || application.role}
                                </p>
                            </div>

                            <div className="flex gap-6 items-center">
                                <span className={`${statusStyles[application.status]} px-3 py-1 rounded-full text-sm font-medium`}>
                                    {application.status}
                                </span>
                                <span className="text-white">
                                    {getLocalDate(application.appliedDate).toLocaleDateString("en-IN", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    })}
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default RecentApplications;