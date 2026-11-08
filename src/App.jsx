import { RouterProvider, createBrowserRouter } from 'react-router';
import './index.css'
import Dashboard from './Pages/Dashboard';
import Layout from './Components/Layout/Layout'
import Applications from './Pages/Applications';
import Kanban from './Pages/Kanban';
import Analytics from './Pages/Analytics';

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
  return <RouterProvider router={router} />;
}

export default App
