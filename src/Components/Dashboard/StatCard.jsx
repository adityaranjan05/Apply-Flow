function StatCard({ title, value, icon }) {
  return (
    <div 
      className="bg-[#151D32] border border-[#27324A] rounded-2xl p-5 flex items-center gap-4"
    >
      <div
        className="w-12 h-12 shrink-0 rounded-xl bg-[#172554] flex items-center justify-center text-[#60A5FA]"
      >
        {icon}
      </div>
      <div
        className="flex flex-col"
      >
        <p>
          {title}
        </p>
        <p>
          {value}
        </p>
      </div>
    </div>
  );
}

export default StatCard;
