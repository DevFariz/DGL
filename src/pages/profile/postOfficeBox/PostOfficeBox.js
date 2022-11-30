import "./PostOfficeBox.scss";
import Chats from "./chats/Chats";

const PostOfficeBox = () => {
  return (
    <div className="post-office-box">
      <h3 className="post-office-box__title">Mein Postfach</h3>
      <div className="post-office-box__container">
        <Chats />
      </div>
    </div>
  );
};

export default PostOfficeBox;
