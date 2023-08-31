import Dashboard from "./pages/dashboard/Dashboard"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transaction from "./pages/transaction/Transaction";
import Support from "./pages/support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
