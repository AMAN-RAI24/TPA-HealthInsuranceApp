import AdminDetailsBox from "../AdminDetailsBox/AdminDetailsBox";
import "./styles.css";
function AdminDetailsSection() {
  return (
    <div className="admin-details-section">
      <AdminDetailsBox
        heading="Platform data"
        item1={{ title: "Users", number: 60 }}
        item2={{ title: "Manager", number: 10 }}
        item3={{ title: "Group Policies", number: 60 }}
        item4={{ title: "Top up Plans", number: 10 }}
      />
      <AdminDetailsBox
        heading="Admin Data"
        item1={{ title: "Roles", number: 3 }}
        item2={{ title: "Hospitals", number: 10 }}
        item3={{ title: "Companies", number: 20 }}
        item4={{ title: "Partners", number: 1 }}
      />
    </div>
  );
}
export default AdminDetailsSection;
