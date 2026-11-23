import { useContext } from "react";
import ApplicationContext from "../../context/ApplicationContext";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";
import { ChartPie } from "lucide-react";

const statuses = [
  "Applied",
  "Assessment",
  "Interview",
  "Offer",
  "Rejected"
];

const colors = [
    "#60A5FA", // Applied
    "#FBBF24", // Assessment
    "#A78BFA", // Interview
    "#34D399", // Offer
    "#F87171"  // Rejected
];

const ApplicationStatusChart = () => {
    const { applications } = useContext(ApplicationContext);
    
    const statusData = statuses.map((status) => ({
        status: status,
        count: applications.filter((app) => app.status === status).length
    }));
    
    return (
        <>
            <div className="bg-[#151D32] border border-[#27324A] rounded-2xl p-5 hover:border-[#4c628d] transition-all duration-200">
                <div className="mb-6 flex gap-5 items-center">
                    <ChartPie size={40} className="text-[#A78BFA]" />
                    <div>
                        <h2 className="text-[#F8FAFC] text-lg font-semibold">
                            Applications Status
                        </h2>
                        <p className="text-[#94A3B8] text-sm mt-1">
                            A breakdown of your applications across different stages of the hiring process.
                        </p>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={statusData}
                            dataKey="count"
                            nameKey="status"
                            innerRadius={70}
                            outerRadius={120}
                            paddingAngle={3}
                            cornerRadius={3}
                        >
                            {statusData.map((item, index) => (
                                <Cell key={item.status} fill={colors[index]} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{
                                backgroundColor: "#0F172A",
                                border: "1px solid #27324A",
                                borderRadius: "0.7rem",
                                color: "#F8FAFC",
                                padding: "10px 14px"
                            }}
                        />
                        <Legend 
                            layout="vertical"
                            align="right"
                            verticalAlign="middle"
                            iconType="circle"
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default ApplicationStatusChart;