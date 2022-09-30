import './DashboardSavings.scss';

import dashboardSavingsImg from '../../../resources/img/dashboard-savings.png';

const DashboardSavings = () => {
  return (
    <section className='dashboard-savings'>
      <h2 className="dashboard-savings__title">Deine Ersparnisse</h2>
      <div className="dashboard-savings__items">
        <img src={dashboardSavingsImg} alt="savings" />
        <img src={dashboardSavingsImg} alt="savings" />
        <img src={dashboardSavingsImg} alt="savings" />
      </div>
    </section>
  )
}

export default DashboardSavings