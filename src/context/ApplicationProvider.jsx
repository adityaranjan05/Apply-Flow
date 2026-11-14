import ApplicationContext from "./ApplicationContext";
import { useState } from "react";
import demoApplications from "../data/demoApplications";

const ApplicationProvider = ({ children }) => {
    const [applications, setApplications] = useState(demoApplications);

    const addApplication = (newApplication) => {
        const applicationWithId = {
            ...newApplication,
            id: crypto.randomUUID(),
        };
        setApplications((prevApplications) => [
            ...prevApplications,
            applicationWithId,
        ])
    }

    return (
        <ApplicationContext.Provider value={{ applications, addApplication }}>
            {children}
        </ApplicationContext.Provider>
    );
}

export default ApplicationProvider;