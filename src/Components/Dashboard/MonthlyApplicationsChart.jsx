import { useContext } from "react";
import ApplicationContext from "../../context/ApplicationContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { ChartNoAxesCombined } from "lucide-react";

const months = {
    0 : "January",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December",
}

const MonthlyApplicationsChart = () => {
    const { applications } = useContext(ApplicationContext)
    console.log(applications);
    const date = new Date();
    const month = date.getMonth();

    const monthsData = new Array(6);
    const applicationCounts = new Array(6).fill(0);

    const getMonthlyApplicationData = () => {
        let k = month;
        let currentYear = new Date().getFullYear();
        for (let i = 5; i >= 0; i--) {
            monthsData[i] = {
                "month": months[k],
                "year" : currentYear,
            }
            if (k == 0) {
                k = 11;
                currentYear--;
            }
            else {
                k--;
            }
        }

        for (const application of applications) {
            const applicationDate = new Date(application.appliedDate);
            const applicationMonth = applicationDate.getMonth();
            const applicationYear = applicationDate.getFullYear();
            for (let i = 0; i < applicationCounts.length; i++) {
                if (months[applicationMonth] === monthsData[i].month && applicationYear === monthsData[i].year) {
                    applicationCounts[i]++;
                }
            }
        }

        return monthsData.map((item, index) => ({
            ...item,
            applications: applicationCounts[index],
        }));
    }

    const monthlyApplicationData = getMonthlyApplicationData();
    console.log(monthlyApplicationData);
    
    return (
        <>
            <div className="bg-[#151D32] border border-[#27324A] rounded-2xl p-5 hover:border-[#4c628d] transition-all duration-200">
                <div className="mb-6 flex gap-3 items-center">
                    <ChartNoAxesCombined size={40} className="text-[#818CF8]" />
                    <div>
                        <h2 className="text-[#F8FAFC] text-lg font-semibold">
                            Applications Overview
                        </h2>
                        <p className="text-[#94A3B8] text-sm mt-1">
                            Your application activity over the last six months
                        </p>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyApplicationData}>
                        <CartesianGrid />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip 
                            contentStyle={{
                                backgroundColor: "#0F172A",
                                border: "1px solid #27324A",
                                borderRadius: "0.7rem",
                                color: "#F8FAFC",
                                padding: "10px 14px"
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="applications"
                            stroke="#818CF8"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}

export default MonthlyApplicationsChart;