import "./MyProgress.scss";

import ProgressImg from '../../../resources/img/profile-progress.png'

const MyProgress = () => {
  return (
    <section className="profile-my-progress">
      <h3 className="profile__title">MyProgress</h3>
      <div className="profile-my-progress-container">
        <div className="profile-my-progress-item">
          <h4 className="profile-my-progress-item__title">Gas</h4>
          <img src={ProgressImg} alt="progress" />
        </div>
        <div className="profile-my-progress-item">
          <h4 className="profile-my-progress-item__title">Wasser</h4>
          <img src={ProgressImg} alt="progress" />
        </div>
        <div className="profile-my-progress-item">
          <h4 className="profile-my-progress-item__title">Strom</h4>
          <img src={ProgressImg} alt="progress" />
        </div>
        <div className="profile-my-progress-item">
          <h4 className="profile-my-progress-item__title">Heizung</h4>
          <img src={ProgressImg} alt="progress" />
        </div>
      </div>
    </section>
  );
};

export default MyProgress;
