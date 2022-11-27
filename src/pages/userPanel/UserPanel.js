import Navbar from "../../components/navbar/Navbar";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../profile/Profile";

const UserPanel = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      {/* <Dashboard /> */}
      <Profile />
    </div>
  );
};

export default UserPanel;
