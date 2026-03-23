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
import PlanBenefits from "../pages/home/PlanBenefits";
import Profile from "../pages/profile/Profile";
import PersonalInfo from "../pages/profile/components/PersonalInfo";
import CurrentPlan from "../pages/profile/components/CurrentPlan";
import Providers from "../pages/profile/components/Providers";
import Prescriptions from "../pages/profile/components/Prescriptions";
import BenefitPreferences from "../pages/profile/components/BenefitPreferences";

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
                path: "/plan-benefits",
                element: <PlanBenefits />
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
            {
                path: "/profile",
                element: <Profile />
            },
            {
                path: "/profile/personal-info",
                element: <PersonalInfo />
            },
            {
                path: "/profile/current-plan",
                element: <CurrentPlan />
            },
            {
                path: "/profile/providers",
                element: <Providers />
            },
            {
                path: "/profile/prescriptions",
                element: <Prescriptions />
            },
            {
                path: "/profile/benefit-preferences",
                element: <BenefitPreferences />
            }
        ]
    },
]);

export default router;