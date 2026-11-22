import { useContext } from "react";
import ApplicationContext from "../../context/ApplicationContext";

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
            
        </>
    )
}

export default MonthlyApplicationsChart;