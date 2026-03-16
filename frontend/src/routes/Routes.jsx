import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PasswordReset from "../pages/auth/PasswordReset";
import Plans from "../pages/plans/Plans";
import Compare from "../pages/plans/Compare";
import PlanDetails from "../pages/plans/plan-details";
import EnrollmentForm from "../pages/plans/EnrollmentForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/sign-in",
                element: <Login />
            },
            {
                path: "/sign-up",
                element: <Register />
            },
            {
                path: "/password-reset",
                element: <PasswordReset />
            },
            {
                path: "/plans",
                element: <Plans />
            },
            {
                path: "/plans/:planId",
                element: <PlanDetails />
            },
            {
                path: "/plans/compare",
                element: <Compare />
            },
            {
                path: "/enroll",
                element: <EnrollmentForm />
            },
        ]
    },
]);

export default router;