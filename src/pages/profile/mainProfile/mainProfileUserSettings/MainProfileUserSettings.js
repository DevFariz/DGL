import { useState } from "react";

import "./MainProfileUserSettings.scss";
import MainProfileUserImg from "../../../../resources/img/mainProfileUserImage.jpg";
import EditIcon from "../../../../resources/svg/edit-icon.svg";

const MainProfileUserSettings = () => {
  const [isEditable, setIsEditable] = useState(false)
  const [email, setEmail] = useState("");
  const [practise, setPractise] = useState("");
  const [practiseLocation, setPractiseLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <section className="main-profile-settings">
      <div className="main-profile-top">
        <img src={MainProfileUserImg} alt="Clara Wüst" />
        <div>
          <div className="main-profile__username">Clara Wüst</div>
          <div className="main-profile__speciality">Zahnärztin</div>
        </div>
      </div>
      <div className="main-profile-center">
        <input
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          disabled={!isEditable}
        />
        <input
          type="text"
          value={practise}
          placeholder="Praxis"
          onChange={(e) => setPractise(e.target.value)}
          disabled={!isEditable}
        />
        <input
          type="text"
          value={practiseLocation}
          placeholder="Standort Praxis"
          onChange={(e) => setPractiseLocation(e.target.value)}
          disabled={!isEditable}
        />
        <input
          type="tel"
          value={phoneNumber}
          placeholder="Telefonnummer"
          onChange={(e) => setPhoneNumber(e.target.value)}
          disabled={!isEditable}
        />
      </div>
      <div className="main-profile-bottom">
        <button onClick={() => setIsEditable(!isEditable)}>
          <img src={EditIcon} alt="edit icon" />
        </button>
      </div>
    </section>
  );
};

export default MainProfileUserSettings;
