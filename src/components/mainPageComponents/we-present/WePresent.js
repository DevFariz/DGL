import './WePresent.scss';
import wePresent from '../../../resources/img/we-present.jpg';

const WePresent = () => {
  return (
    <section className='we-present'>
      <div className="container">
        <h2 className="title we-present__title">
          WIR STELLEN UNS VOR
        </h2>
        <p className="we-present__desc">Das ist unser Team</p>
      </div>
      <img src={wePresent} alt="we present" />
    </section>
  )
}

export default WePresent