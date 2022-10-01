import './DashboardDiagram.scss';

import dashboardDiagramImg from '../../../resources/img/dashboard-diagram.png';

const DashboardDiagram = () => {
  return (
    <section className='dashboard-diagram'>
      <h2 className="dashboard-diagram__title">Strom und Gas</h2>
      <img src={dashboardDiagramImg} alt="diagram" />
    </section>
  )
}

export default DashboardDiagram