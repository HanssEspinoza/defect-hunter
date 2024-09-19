import { createBrowserRouter } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { Root } from "../Root"
import { AuthLayout, DashboardLayout } from "../layouts"
import { HomePage } from "../pages/Home"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            // Dashboard Routes
            {
                path: 'dashboard',
                element: <DashboardLayout />,
                children: [
                    { path: '', element: <HomePage/> }
                ]
            }
        ]
    },
    // Auth Routes
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />
            }
        ]
    }
])
