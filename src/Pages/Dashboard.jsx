import StatCard from "../Components/Dashboard/StatCard";
import WelcomeSection from "../Components/Dashboard/WelcomeSection";

function Dashboard() {
  return (
    <div
      className="h-full space-y-8"
    >
      <WelcomeSection />
      <div
        className="flex"
      >
        <StatCard />
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
    </div>
  );
}

export default Dashboard;