import ChatItem from "./chatItem/ChatItem";
import "./Chats.scss";
import ChatsMoreIcon from "../../../../resources/svg/chats-more-icon.svg";

const Chats = () => {
  const chats = [1, 2, 3, 4, 5];

  return (
    <div className="post-office-box__chats">
      {chats.map((chatItem, i) => (
        <ChatItem key={i} />
      ))}
      <div className="post-office-box__chats-more">
        <img src={ChatsMoreIcon} alt="chats more" />
      </div>
    </div>
  );
};

export default Chats;
