import Navbar from "../../components/navbar/Navbar";
import Dashboard from "../dashboard/Dashboard";
import MainProfile from "../profile/mainProfile/MainProfile"

const UserPanel = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      {/* <Dashboard /> */}
      <MainProfile />
    </div>
  );
};

export default UserPanel;
