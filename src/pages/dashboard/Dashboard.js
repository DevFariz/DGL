import './Dashboard.scss';
import Navbar from '../../components/navbar/Navbar';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <Navbar />
      <main className="dashboard-main">
        Main
      </main>
    </div>
  )
}

export default Dashboard