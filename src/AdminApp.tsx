import { Route, Routes } from "react-router-dom";
import AdminActions from "./Components/AdminActionsBar/AdminActions";
import { Managers } from "./Containers/AddManagers/Managers";
import { Companies } from "./Containers/AdminCompanies/Comapnies";
import AdminDashboard from "./Containers/AdminDashboard/AdminDashboard";
import { Hospitals } from "./Containers/AdminHospitals/Hospitals";
import { Roles } from "./Containers/AdminRoles/Roles";

function AdminApp() {
  return (
    <div>
      <Routes>
        <Route path="admin/" element={<AdminDashboard />} />
        <Route path="admin/roles" element={<Roles />} />
        <Route path="admin/companies" element={<Companies />} />
        <Route path="admin/hospitals" element={<Hospitals />} />
        <Route path="admin/managers" element={<Managers />} />
      </Routes>
    </div>
  );
}
export default AdminApp;
