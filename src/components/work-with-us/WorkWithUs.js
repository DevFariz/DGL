import './WorkWithUs.scss';
import workWithUs from "../../resources/img/work-with-us.png";

const WorkWithUs = () => {
  return (
    <section className='work-with-us'>
      <div className="container">
        <h2 className="title work-with-us__title">so empfangen wir dich bei uns</h2>
        <p className="work-with-us__text">Verschaffe dir auf deinem Dashboard eine Übersicht</p>
        <div className="work-with-us-container">
          <img src={workWithUs} alt="work with us" />
        </div>
      </div>
    </section>
  )
}

export default WorkWithUs