import { useContext } from "react";
import StatCard from '../Components/Dashboard/StatCard';
import WelcomeSection from "../Components/Dashboard/WelcomeSection";
import ApplicationContext from "../context/ApplicationContext";
import { BriefcaseBusiness, CalendarDays, Trophy, X } from "lucide-react";

function Dashboard() {
  const { applications } = useContext(ApplicationContext);
  const totalApplications = applications.length;

  const interviews = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const offers = applications.filter(
    (app) => app.status === "Offer"
  ).length;

  const rejections = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  return (
    <div
      className="h-full space-y-8"
    >
      <WelcomeSection />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
      >
        <StatCard title="Total Applications" value={totalApplications} icon={<BriefcaseBusiness />} />
        <StatCard title="Interviews" value={interviews} icon={<CalendarDays />} />
        <StatCard title="Offers" value={offers} icon={<Trophy />} />
        <StatCard title="Rejections" value={rejections} icon={<X />} />
      </div>
    </div>
  );
}

export default Dashboard;