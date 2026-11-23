import { useContext } from "react";
import ApplicationContext from "../../context/ApplicationContext";
import { CalendarClock } from "lucide-react";

const UpcomingInterviews = () => {
    const { applications } = useContext(ApplicationContext);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const getLocalDate = (dateString) => {
        const [year, month, day] = dateString.split("-").map(Number);
        return new Date(year, month - 1, day);
    };

    const upcomingInterviews = applications.filter((application) => 
                                                    (
                                                        (application.status === "Interview") 
                                                        && 
                                                        (getLocalDate(application.interviewDate) >= today)
                                                    )
    );
    upcomingInterviews.sort((a, b) => {
        return (getLocalDate(a.interviewDate).getTime() - getLocalDate(b.interviewDate).getTime());
    })

    return (
        <div className="bg-[#151D32] border border-[#27324A] rounded-2xl p-5 hover:border-[#4c628d] transition-all duration-200 space-y-4 min-h-87.5 max-h-87.5">
            <div className="flex gap-3 items-center">
                <CalendarClock  size={40} className="text-[#818CF8]" />
                <div>
                    <h2 className="text-[#F8FAFC] text-lg font-semibold">
                        Upcoming Interviews
                    </h2>
                    <p className="text-[#94A3B8] text-sm mt-1">
                        Stay prepared for what's next. Keep track of your upcoming interviews and never miss an opportunity.
                    </p>
                </div>
            </div>
            <div className="space-y-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-50 pr-3">
                {upcomingInterviews.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <CalendarClock size={36} className="text-[#818CF8] mb-3" />
                        <h3 className="text-white font-medium">
                            No upcoming interviews
                        </h3>
                        <p className="text-[#94A3B8] text-sm mt-1">
                            Your scheduled interviews will appear here.
                        </p>
                    </div>
                ) : (
                    upcomingInterviews.map((interview) => {
                        const remainingDays = Math.ceil(
                            (getLocalDate(interview.interviewDate) - today) / (1000 * 60 * 60 * 24)
                        );
                        return (
                            <div
                                className="flex justify-between items-center bg-amber-50/2 hover:bg-amber-50/3 p-3 rounded-2xl border border-[#2a3a5c] hover:border-[#4c628d] transition-all duration-200"
                                key={interview.id}
                            >
                                <div>
                                    <h2 className="text-white">
                                        {interview.company}
                                    </h2>
                                    <p className="text-amber-50/50 text-sm">
                                        {interview.description || interview.role}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-white text-sm">
                                        {getLocalDate(interview.interviewDate).toLocaleDateString("en-IN", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric"
                                        })}
                                    </span>

                                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${
                                        remainingDays === 0
                                            ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                                            : remainingDays === 1
                                                ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                                : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
                                    }`}>
                                        {remainingDays === 0
                                            ? "Today"
                                            : remainingDays === 1
                                                ? "Tomorrow"
                                                : `In ${remainingDays} days`
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default UpcomingInterviews;