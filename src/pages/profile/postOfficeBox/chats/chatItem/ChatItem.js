import React from "react";

import "./ChatItem.scss";

import UserIcon from "../../../../../resources/img/user-icon.png";
import DeleteBtn from "../../../../../resources/svg/delete-btn.svg";

const ChatItem = () => {
  return (
    <div className="post-office-box__chat-item">
      <div className="post-office-box__chat-item-icon">
        <img src={UserIcon} alt="user-icon" />
      </div>
      <div className="post-office-box__chat-item-content">
        <p className="post-office-box__chat-item-from">DIE GRÜNE LÖSUNG</p>
        <p className="post-office-box__chat-item-message">
          Deine Zahlungen sind aktiv
        </p>
      </div>
      <div className="post-office-box__chat-item-delete" style={{marginRight: 0}}>
        <button>
          <img src={DeleteBtn} alt="delete button" />
        </button>
      </div>
      <div className="post-office-box__chat-item-date">12.06</div>
    </div>
  );
};

export default ChatItem;
