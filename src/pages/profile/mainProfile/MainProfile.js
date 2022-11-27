import MainProfileUserSettings from "./mainProfileUserSettings/MainProfileUserSettings";
import MessageBox from "./messageBox/MessageBox";
import Progress from "./progress/Progress";
import Company from "./company/Company";

import "./MainProfile.scss";

const MainProfile = () => {
  return (
    <div className="main-profile-container">
      <MainProfileUserSettings />
      <MessageBox />
      <Progress />
      <Company />
    </div>
  );
};

export default MainProfile;
