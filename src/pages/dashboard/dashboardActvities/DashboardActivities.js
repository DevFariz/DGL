import './DashboardActivities.scss';

import dashboardActivityImg1 from '../../../resources/svg/dashboard-activities-01.svg';
import dashboardActivityImg2 from '../../../resources/svg/dashboard-activities-02.svg';
import dashboardActivityImg3 from '../../../resources/svg/dashboard-activities-03.svg';

const DashboardActivities = () => {

  const activitiesData = [
    {
      title: 'Druckerpatronen recyclen',
      text: 'Bestelle dir jetzt deine grüne Sammelbox',
      icon: dashboardActivityImg1,
    },
    {
      title: 'Ecosia installieren',
      text: 'Installiere dir jetzt deinen umweltfreundlichen Browser',
      icon: dashboardActivityImg2,
    },
    {
      title: 'Biotonne anmelden',
      text: 'Bestelle dir bei deinem Landkreis deine Biotonne',
      icon: dashboardActivityImg3,
    }
  ]

  const items = activitiesData.map(({title, text, icon}, id) => {
      return (
        <li className="dashboard-activities__item" key={id}> 
          <div className="dashboard-activities__item-img">
            <img src={icon} alt={title} />
          </div>
          <div className="dashboard-activities__item-content">
            <h4 className="dashboard-activities__item-title">{title}</h4>
            <p className="dashboard-activities__item-text">{text}</p>
          </div>
        </li>
      )
  })

  return (
    <section className='dashboard-activities'>
      <h2 className="dashboard-activities__title">Deine Aktivitäten </h2>
      <ul className="dashboard-activities__items">
        {items}
      </ul>
    </section>
  )
}

export default DashboardActivities