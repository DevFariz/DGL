import "./Progress.scss";
import ProgressImg from "../../../../resources/img/main-profile-progress.png";

const Progress = () => {
  return (
    <section className="main-profile__progress">
      <h3 className="main-profile__title main-profile__progress-title">
        Dein Fortschritt
      </h3>
      <img src={ProgressImg} alt="progress" />
    </section>
  );
};

export default Progress;
