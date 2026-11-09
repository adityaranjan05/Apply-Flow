import ApplicationContext from "./ApplicationContext";
import { useState } from "react";
import demoApplications from "../data/demoApplications";

const ApplicationProvider = ({ children }) => {
    const [applications, setApplications] = useState(demoApplications);
    return (
        <ApplicationContext.Provider value={{ applications, setApplications }}>
            {children}
        </ApplicationContext.Provider>
    );
}

export default ApplicationProvider;