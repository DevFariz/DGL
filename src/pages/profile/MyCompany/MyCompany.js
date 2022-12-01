import "./MyCompany.scss";

const MyCompany = () => {
  const items = [
    { id: 1, data: "23", name: "Mitarbeiter" },
    { id: 2, data: "100", name: "Praxis qm" },
    { id: 3, data: "10h", name: "TäGl" },
    { id: 4, data: "Köln", name: "Standort" },
  ];

  return (
    <section className="profile-my-company">
      <h3 className="profile__title profile-my-company__title">
        Mein Unternehmen
      </h3>
      <div className="profile-my-company-items">
        {items.map((item) => {
          const { id, data, name } = item;

          return (
            <div key={id}>
              <div className="profile-my-company__data">{data}</div>
              <div className="profile-my-company__name">{name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyCompany;
