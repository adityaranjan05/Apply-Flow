import { BriefcaseBusiness, Plus } from "lucide-react";

function WelcomeSection () {
    return (
        <div
            className="flex justify-between bg-[#151D32]/70 backdrop-blur-2xl border border-[#818CF8]/15 rounded-2xl px-5 py-7"
        >
            <div
                className="flex gap-5"
            >
                <span
                    className="bg-[#6366F1]/10 backdrop-blur-4xl rounded-2xl border border-[#818CF8]/30 p-4 flex items-center justify-center"
                >
                    <BriefcaseBusiness className="text-[#818CF8] h-10 w-10" />
                </span>
                <span
                    className="flex flex-col justify-center"
                >
                    <p
                        className="text-[#F8FAFC] text-3xl font-semibold"
                    >
                        Good morning, Aditya!
                    </p>
                    <p
                        className="text-[#E2E8F0] text-sm leading-loose"
                    >
                        Let's keep up the momentum. You've got this!
                    </p>
                </span>
            </div>
            <div
                className="flex items-center"
            >
                <button
                    className="flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white font-medium shadow-lg shadow-indigo-500/20 cursor-pointer"
                >
                    <Plus size={20} />
                    <span>
                        Add Application
                    </span>
                </button>
            </div>
        </div>
    )
}

export default WelcomeSection;