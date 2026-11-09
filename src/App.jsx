import { RouterProvider, createBrowserRouter } from "react-router";
import "./index.css";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Components/Layout/Layout";
import Applications from "./Pages/Applications";
import Kanban from "./Pages/Kanban";
import Analytics from "./Pages/Analytics";
import ApplicationProvider from "./context/ApplicationProvider";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/applications",
        element: <Applications />,
      },
      {
        path: "/kanban",
        element: <Kanban />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
    ],
  },
]);

function App() {
  return (
    <ApplicationProvider>
      <RouterProvider router={router} />
    </ApplicationProvider>
  );
}

export default App;
