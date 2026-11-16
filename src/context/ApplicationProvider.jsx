import ApplicationContext from "./ApplicationContext";
import { useState, useEffect } from "react";
import demoApplications from "../data/demoApplications";

const ApplicationProvider = ({ children }) => {
    const [applications, setApplications] = useState(() => {
        const savedApplications = localStorage.getItem("applications");

        return savedApplications
            ? JSON.parse(savedApplications)
            : demoApplications;
    });

    useEffect(() => {
        localStorage.setItem(
            "applications",
            JSON.stringify(applications)
        );
    }, [applications]);

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