import { useContext, useState } from "react";
import StatCard from '../Components/Dashboard/StatCard';
import WelcomeSection from "../Components/Dashboard/WelcomeSection";
import ApplicationContext from "../context/ApplicationContext";
import { BriefcaseBusiness, CalendarDays, Trophy, X, ClipboardCheck } from "lucide-react";
import AddApplicationModal from "../Components/Applications/AddApplicationModal";
import MonthlyApplicationsChart from "../Components/Dashboard/MonthlyApplicationsChart";
import ApplicationStatusChart from "../Components/Dashboard/ApplicationStatusChart";
import RecentApplications from "../Components/Dashboard/RecentApplications";

function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { applications } = useContext(ApplicationContext);
  const totalApplications = applications.length;

  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }

  const interviews = applications.filter(
    (app) => app.status === "Interview"
  ).length;
  
  const assessments = applications.filter(
    (app) => app.status === "Assessment"
  ).length;

  const offers = applications.filter(
    (app) => app.status === "Offer"
  ).length;

  const rejections = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  return (
    <div
      className="h-full space-y-6"
    >
      <WelcomeSection onAddClick={handleOpenModal} />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
      >
        <StatCard title="Total Applications" value={totalApplications} icon={<BriefcaseBusiness />} />
        <StatCard title="Interviews" value={interviews} icon={<CalendarDays />} />
        <StatCard title="Assessments" value={assessments} icon={<ClipboardCheck />} />
        <StatCard title="Offers" value={offers} icon={<Trophy />} />
        <StatCard title="Rejections" value={rejections} icon={<X />} />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 items-stretch">
        <div className="xl:col-span-3 min-w-0">
            <MonthlyApplicationsChart />
        </div>

        <div className="xl:col-span-2 min-w-0">
            <ApplicationStatusChart />
        </div>
      </div>
      <div>
        <RecentApplications />
      </div>
      {isModalOpen && <AddApplicationModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Dashboard;