import { BriefcaseBusiness, Plus, X } from "lucide-react"
import { useState, useContext } from "react"
import ApplicationContext from "../../context/ApplicationContext";

const AddApplicationModal = ( {onClose} ) => {
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [appliedStatus, setAppliedStatus] = useState("");
    const [appliedDate, setAppliedDate] = useState("");
    const [notes, setNotes] = useState("");

    const { addApplication } = useContext(ApplicationContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const application = {
            company: company,
            role: role,
            status: appliedStatus,
            appliedDate: appliedDate,
            notes: notes,
        }
        addApplication(application);
        onClose();
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300"
        >
            <div
                className="w-full max-w-xl bg-[#151D32] border border-[#27324A] rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            >
                <div
                    className="flex justify-between items-center"
                >
                    <div
                        className="flex gap-5"
                    >
                        <div
                            className="p-3 rounded-xl bg-[#6366F1]/10 border border-[#818CF8]/20"
                        >
                            <BriefcaseBusiness className="w-7 h-7 text-[#818CF8] drop-shadow-md drop-shadow-[#818CF8]/70" />
                        </div>
                        <div
                            className="flex flex-col"
                        >
                            <p
                                className="text-[#F8FAFC] text-2xl font-semibold"
                            >
                                Add New Application
                            </p>
                            <p
                                className="text-[#94A3B8] text-sm"
                            >
                                Track your job application details
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="cursor-pointer p-1 rounded-lg border border-[#334155] text-white/70 hover:border-[#818CF8] hover:text-white hover:bg-[#1E293B] transition-colors"
                        onClick={onClose}
                    >
                        <X size={18} />
                    </button>
                </div>
                <div className="border-t border-[#27324A] mt-4 -mx-6"></div>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div
                        className="grid grid-cols-2 gap-5"
                    >
                        <div className="flex flex-col gap-2">
                            <label className="text-white/90" htmlFor="company">
                                Company
                            </label>
                            <input 
                                type="text"
                                id="company"
                                className="py-2 px-4 text-sm flex-1 border border-[#27324A] rounded-lg text-white/80 focus:outline-none focus:ring-0 focus:ring-[#6366F1]/20 focus:border-[#818CF8] hover:border-[#475569]"
                                onChange={(e) => setCompany(e.target.value)}
                                value={company}
                                required
                            >
                            </input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white/90" htmlFor="role">
                                Role
                            </label>
                            <input 
                                type="text"
                                id="role"
                                className="py-2 px-4 text-sm flex-1 border border-[#27324A] rounded-lg text-white/80 focus:outline-none focus:ring-0 focus:ring-[#6366F1]/20 focus:border-[#818CF8] hover:border-[#475569]"
                                onChange={(e) => setRole(e.target.value)}
                                value={role}
                                required
                            >
                            </input>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white/90" htmlFor="applied-status">
                                Applied Status
                            </label>
                            <select
                                id="applied-status"
                                className="py-2 px-4 text-sm flex-1 border border-[#27324A] rounded-lg text-white/80 focus:outline-none focus:ring-0 focus:ring-[#6366F1]/20 focus:border-[#818CF8] hover:border-[#475569]"
                                onChange={(e) => setAppliedStatus(e.target.value)}
                                value={appliedStatus}
                                required
                            >
                                <option value="" disabled className="bg-[#1E293B] text-[#64748B] scheme-dark">Select application status</option>
                                <option
                                    value="Applied"
                                    className="text-white bg-[#1E293B]"
                                >
                                    Applied
                                </option>
                                <option 
                                    value="Assessment"
                                    className="text-white bg-[#1E293B]"
                                >
                                    Assessment
                                </option>
                                <option 
                                    value="Interview"
                                    className="text-white bg-[#1E293B]"
                                >
                                    Interview
                                </option>
                                <option 
                                    value="Offer"
                                    className="text-white bg-[#1E293B]"
                                >
                                    Offer
                                </option>
                                <option 
                                    value="Rejected"
                                    className="text-white bg-[#1E293B]"
                                >
                                    Rejected
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-white/90" htmlFor="applied-date">
                                Applied Date
                            </label>
                            <input 
                                id="applied-date"
                                type="date"
                                className="py-2 px-4 text-sm flex-1 border border-[#27324A] rounded-lg text-white/80 focus:outline-none focus:ring-0 focus:border-[#818CF8] hover:border-[#475569] outline-none transition-all duration-200 focus:ring-[#6366F1]/20 scheme-dark"
                                onClick={(e) => e.target.showPicker()}
                                onChange={(e) => setAppliedDate(e.target.value)}
                                value={appliedDate}
                                required
                            >
                            </input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                        <label htmlFor="notes" className="text-white/90">
                            Notes
                        </label>
                        <textarea
                            id="notes"
                            placeholder="Add any notes about this application..."
                            rows={3}
                            className="py-2 px-4 text-sm flex-1 border border-[#27324A] rounded-lg text-white/80 focus:outline-none focus:ring-0 focus:ring-[#6366F1]/20 focus:border-[#818CF8] resize-none overflow-y-auto scrollbar-thin scrollbar-track-[#0F172A] scrollbar-thumb-[#334155] hover:border-[#475569]"
                            onChange={(e) => setNotes(e.target.value)}
                            value={notes}
                        />
                    </div>
                    <div className="border-t border-[#27324A] mt-4 -mx-6"></div>
                    <div className="flex gap-5 items-center justify-end mt-4">
                        <button
                            type="button"
                            className="border border-[#354058] text-white px-4 py-2 rounded-lg"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 bg-linear-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white font-medium shadow-lg shadow-indigo-500/20 cursor-pointer selection:bg-[#6366F1]/50"
                        >
                            <Plus />
                            Add Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddApplicationModal