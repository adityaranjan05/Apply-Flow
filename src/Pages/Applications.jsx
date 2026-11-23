import { useContext, useState } from "react";
import WelcomeSection from "../Components/Dashboard/WelcomeSection";
import ApplicationContext from "../context/ApplicationContext";
import AddApplicationModal from "../Components/Applications/AddApplicationModal";

function Applications() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { applications } = useContext(ApplicationContext);
  const totalApplications = applications.length;

  const handleOpenModal = () => {
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setModalOpen(false);
  }
  return (
    <div className="h-full space-y-6">
      <WelcomeSection onAddClick={handleOpenModal} />
      

      {isModalOpen && <AddApplicationModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Applications;
