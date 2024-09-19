import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { HomePage } from "../pages/Home"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<LoginPage />} />
        <Route path="/*" element={<HomePage />} />
    </Routes>
  )
}
