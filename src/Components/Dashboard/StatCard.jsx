const cardStyles = {
  "Total Applications": "bg-[#172554] text-blue-400 border border-blue-500/30 shadow-blue-500/10",
  "Interviews": "bg-[#2E1065] text-purple-400 border border-purple-500/30 shadow-purple-500/10",
  "Offers": "bg-[#064E3B] text-emerald-400 border border-emerald-500/30 shadow-emerald-500/10",
  "Rejections": "bg-[#450A0A] text-red-400 border border-red-500/30 shadow-red-500/10",
};

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-[#151D32] border border-[#27324A] rounded-2xl p-5 flex flex-col items-start gap-4 hover:border-[#3B4A68] transition-all duration-200">

      <div
        className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center p-2 shadow-lg ${cardStyles[title]}`}
      >
        {icon}
      </div>

      <div className="flex flex-col space-y-3">
        <p className="text-[#94A3B8] text-sm selection:bg-[#6366F1]/50 selection:text-white/90">{title}</p>
        <p className="text-[#F8FAFC] text-4xl font-semibold selection:bg-[#6366F1]/50">{value}</p>
      </div>

    </div>
  );
}

export default StatCard;