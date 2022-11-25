import "./Company.scss";

const Company = () => {
  const data = [
    { count: "03", name: "abgeschlossene Maßnahmen" },
    { count: "11", name: "gepflanzte Bäume" },
    { count: "17", name: "Kontakte" },
    { count: "38kg", name: "CO2 eingespar" },
  ];

  return (
    <section className="main-profile__company">
      <h3 className="main-profile__title main-profile__company-title">Dein Unternehmen</h3>
      <div className="main-profile__company-items">
        {data.map((item, i) => {
          return <CompanyItem {...item} key={i} />;
        })}
      </div>
    </section>
  );
};

const CompanyItem = ({ count, name }) => {
  return (
    <div className="main-profile__company-item">
      <div>{count}</div>
      <div>{name}</div>
    </div>
  );
};

export default Company;
