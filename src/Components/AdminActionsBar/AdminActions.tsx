import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
function AdminActions() {
  let navigate = useNavigate();

  function onClick(route: string) {
    navigate("/admin/" + route);
  }
  return (
    <div className="admin-actions">
      <button className="admin-btn black" onClick={() => onClick("roles")}>
        Roles
      </button>
      <button className="admin-btn black" onClick={() => onClick("hospitals")}>
        Hospitals
      </button>
      <button className="admin-btn black" onClick={() => onClick("managers")}>
        Add Partner
      </button>
      <button className="admin-btn black" onClick={() => onClick("companies")}>
        Company
      </button>
    </div>
  );
}
export default AdminActions;
