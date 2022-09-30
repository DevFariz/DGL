import Navbar from '../../components/navbar/Navbar';
import DashboardHeader from './dashboardHeader/DashboardHeader';
import DashboardSavings from './dashboardSavings/DashboardSavings';


import './Dashboard.scss';


const Dashboard = () => {


  return (
    <div className='dashboard-container'>
      <Navbar />
      <div className='dashboard-content'>
        <DashboardHeader />
        <main className="dashboard-main">
          <DashboardSavings />
        </main>
      </div>
    </div>
  )
}

export default Dashboard