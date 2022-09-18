import './StartNow.scss';

import startNow01 from "../../../resources/svg/start-now-01.svg";
import startNow02 from "../../../resources/svg/start-now-02.svg";
import startNow03 from "../../../resources/svg/start-now-03.svg";
import startNow04 from "../../../resources/svg/start-now-04.svg";

const StartNow = () => {
  return (
    <section className='start-now'>
        <h2 className="start-now__title">
          <span>Werde zum Vorreiter und</span> leg’ direkt los!
        </h2>
        <div className="start-now-container">
          <ul className="start-now__items">
            <li className="start-now__item start-now__item_01">
              <img src={startNow01} alt="start now" className="start-now__img" />
              <p className="start-now__text start-now__text_01">Junges Kölner Start-Up</p>
            </li>
            <li className="start-now__item start-now__item_02">
              <img src={startNow02} alt="start now" className="start-now__img" />
              <p className="start-now__text start-now__text_02">Proaktives Engagement</p>
            </li>
            <li className="start-now__item start-now__item_03">
              <img src={startNow03} alt="start now" className="start-now__img" />
              <p className="start-now__text start-now__text_03">Ganzheitlicher Ansatz</p>
            </li>
            <li className="start-now__item start-now__item_04">
              <img src={startNow04} alt="start now" className="start-now__img" />
              <p className="start-now__text start-now__text_04">Fortschrittliche Softwarelösung</p>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default StartNow