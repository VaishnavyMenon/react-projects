import Dashboard from "./pages/dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transaction from "./pages/transaction/Transaction";
import Support from "./pages/support/Support";
import SignUp from "./pages/auth/SignUp/signup";
import SignIn from "./pages/auth/SignIn/signin";
import RegisterEmailVerification from "./pages/auth/RegisterEmailVerification/RegisterEmailVerification";
import RegistrationSuccess from "./pages/auth/RegistrationSuccess/RegistrationSuccess";
import ResetEmailSuccess from "./pages/auth/ResetEmailSendSuccess/ResetEmailSuccess";
import ResetSuccess from "./pages/auth/ResetSuccess/ResetSuccess";
import ForgotPassword from "./pages/auth/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword/ResetPassword";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/transaction",
    element: (
      <ProtectedRoute>
        <Transaction />
      </ProtectedRoute>
    ),
  },
  {
    path: "/support",
    element: (
      <ProtectedRoute>
        <Support />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <AlreadySigninRoute>
        <SignUp />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <AlreadySigninRoute>
        <SignIn />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/email-verification/:email",
    element: (
      <AlreadySigninRoute>
        <RegisterEmailVerification />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/email-verify/:token",
    element: (
      <AlreadySigninRoute>
        <RegistrationSuccess />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/email-success",
    element: (
      <AlreadySigninRoute>
        <ResetEmailSuccess />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/reset-success",
    element: (
      <AlreadySigninRoute>
        <ResetSuccess />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AlreadySigninRoute>
        <ForgotPassword />
      </AlreadySigninRoute>
    ),
  },
  {
    path: "/forgot-password-verify/:token",
    element: (
      <AlreadySigninRoute>
        <ResetPassword />
      </AlreadySigninRoute>
    ),
  },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
