import './DashboardStatisticsItem.scss';

const DashboardStatisticsItem = ({dayOfWeek, dayOfMonth, statisticsGraph, plusData}) => {
  return (
    <div className='dashboard-statistics__item'>
      <div className="dashboard-statistics__item-date">
        <div className="dashboard-statistics__item-date-week">{dayOfWeek}</div>
        <div className="dashboard-statistics__item-date-month">{dayOfMonth}</div>
      </div>
      <div className="dashboard-statistics__item-graph">
        <span>Statistik</span>
        <img src={statisticsGraph} alt="statistics" />
      </div>
      <div className="dashboard-statistics__item-plus">
        {plusData}
      </div>
    </div>
  )
}

export default DashboardStatisticsItem