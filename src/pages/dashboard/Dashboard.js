import Navbar from '../../components/navbar/Navbar';
import DashboardHeader from './dashboardHeader/DashboardHeader';
import DashboardSavings from './dashboardSavings/DashboardSavings';


import './Dashboard.scss';
import DashboardSlider from './dashboardSlider/DashboardSlider';
import DashboardStatistics from './dashboardStatistics/DashboardStatistics';
import DashboardDiagram from './dashboardDiagram/DashboardDiagram';
import DashboardActivities from './dashboardActvities/DashboardActivities';


const Dashboard = () => {


  return (
    <div className='dashboard-container'>
      <Navbar />
      <div className='dashboard-content'>
        <DashboardHeader />
        <main className="dashboard-main">
          <DashboardSavings />
          <DashboardSlider />
          <DashboardStatistics />
          <DashboardDiagram />
          <DashboardActivities />
        </main>
      </div>
    </div>
  )
}

export default Dashboard