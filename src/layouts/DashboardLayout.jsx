import { Outlet } from "react-router"
import HeaderDashboard from "../components/models/HeaderDashboard"
import SideBarDashboard from "../components/models/SideBarDashboard"

const DashboardLayout = () => {
    return (
        <>
            <div className="flex flex-1 md:hidden justify-center items-center min-h-screen">
                <p>Min Resolution : 768px</p>
            </div>
            <div className="hidden md:flex md:flex-row min-h-screen">
            <SideBarDashboard />
            <div className="flex flex-col flex-1 border-l border-other-border">
                <HeaderDashboard />
                <div className="flex-1 overflow-auto">
                <Outlet />
                </div>
            </div>
            </div>
        </>
    )
}

export default DashboardLayout