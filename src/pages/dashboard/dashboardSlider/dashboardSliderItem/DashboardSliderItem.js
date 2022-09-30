import './DashboardSliderItem.scss';

const DashboardSliderItem = ({title, text, backgroundImg}) => {
  return (
    <div className='dashboard-slider__item'>
      <h3 className="dashboard-slider__item-title">{title}</h3>
      <p className="dashboard-slider__item-text">{text}</p>
      <img className="dashboard-slider__item-background" src={backgroundImg} />
    </div>
  )
}

export default DashboardSliderItem