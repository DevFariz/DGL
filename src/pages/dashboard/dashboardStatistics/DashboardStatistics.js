import DashboardStatisticsItem from './dashboardStatisticsItem/DashboardStatisticsItem';

import './DashboardStatistics.scss';

import dashboardStatisticsImg1 from '../../../resources/svg/dashbboard-statistics.svg';

const DashboardStatistics = () => {

  const statisticsData = [
    {
      dayOfWeek: 'MI',
      dayOfMonth: '08',
      statisticsGraph: dashboardStatisticsImg1,
      plusData: '+5'
    },
    {
      dayOfWeek: 'DO',
      dayOfMonth: '09',
      statisticsGraph: dashboardStatisticsImg1,
      plusData: '+5'
    }
  ]

  const items = statisticsData.map((item, id) => {
    return <DashboardStatisticsItem {...item} key={id}/>;
  })

  return (
    <section className='dashboard-statistics'>
      {items}
    </section>
  )
}

export default DashboardStatistics