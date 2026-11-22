import { useContext } from "react";
import ApplicationContext from "../../context/ApplicationContext";
import { History } from "lucide-react";

const RecentApplications = () => {
    const { applications } = useContext(ApplicationContext);
    const recentApplications = applications.slice(-5).reverse();

    return (
        <div className="bg-[#151D32] border border-[#27324A] rounded-2xl p-5 hover:border-[#4c628d] transition-all duration-200 space-y-4">
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
                {recentApplications.map((application) => (
                    <div
                        className="flex justify-between items-center bg-amber-50/2 hover:bg-amber-50/3 p-3 rounded-2xl border border-[#2a3a5c] hover:border-[#4c628d] transition-all duration-200"
                        key={application.id}
                    >
                        <div>
                            <h2 className="text-white">
                                {application.company}
                            </h2>
                            <p className="text-amber-50/50 text-sm">
                                {application.description}
                            </p>
                        </div>

                        <div className="flex gap-6">
                            <span className="text-white">
                                {application.status}
                            </span>
                            <span className="text-white">
                                {new Date(application.appliedDate).toLocaleDateString("en-IN", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric"
                                })}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentApplications;