import "./MessageBox.scss";

const MessageBox = () => {
  return (
    <section className="main-profile__messagebox">
      <h2 className="main-profile__title">Nachricht versenden</h2>
      <div>
        <div className="main-profile__messagebox-left">
          <input type="text" placeholder="Empfänger*in" />
          <input type="text" placeholder="Nachricht" />
        </div>
        <div className="main-profile__messagebox-right">
          <button className="btn-green main-profile__messagebox-submit">ABSENDEN</button>
        </div>
      </div>
    </section>
  );
};

export default MessageBox;
