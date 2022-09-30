import Slider from "react-slick";

import DashboardSliderItem from "./dashboardSliderItem/DashboardSliderItem";

import './dashboardSlider.scss';

import dashboardCarouselImg1 from '../../../resources/img/dashboard-carousel-01.jpg'
import dashboardCarouselImg2 from '../../../resources/img/dashboard-carousel-02.jpg'
import dashboardCarouselImg3 from '../../../resources/img/dashboard-carousel-03.jpg'
import dashboardCarouselImg4 from '../../../resources/img/dashboard-carousel-04.jpg'
import dashboardCarouselImg5 from '../../../resources/img/dashboard-carousel-05.jpg'
import dashboardCarouselImg6 from '../../../resources/img/dashboard-carousel-06.jpg'

const DashboardSlider = () => {

  const sliderData = [
    {
      title: 'BEISPIELTEXT',
      text: 'Jetzt wird Umweltschutz in deinem Unternehmen: einfach, ökonomisch und modern. DieGrüneLösung - alles mit nur einem Werkzeug.',
      backgroundImg: dashboardCarouselImg1
    },
    {
      title: 'BEISPIELTEXT',
      text: 'Jetzt wird Umweltschutz in deinem Unternehmen: einfach, ökonomisch und modern. DieGrüneLösung - alles mit nur einem Werkzeug.',
      backgroundImg: dashboardCarouselImg2
    },
    {
      title: 'BEISPIELTEXT',
      text: 'Jetzt wird Umweltschutz in deinem Unternehmen: einfach, ökonomisch und modern. DieGrüneLösung - alles mit nur einem Werkzeug.',
      backgroundImg: dashboardCarouselImg3
    },
    {
      title: 'BEISPIELTEXT',
      text: 'Jetzt wird Umweltschutz in deinem Unternehmen: einfach, ökonomisch und modern. DieGrüneLösung - alles mit nur einem Werkzeug.',
      backgroundImg: dashboardCarouselImg4
    },
    {
      title: 'BEISPIELTEXT',
      text: 'Jetzt wird Umweltschutz in deinem Unternehmen: einfach, ökonomisch und modern. DieGrüneLösung - alles mit nur einem Werkzeug.',
      backgroundImg: dashboardCarouselImg5
    },
    {
      title: 'BEISPIELTEXT',
      text: 'Jetzt wird Umweltschutz in deinem Unternehmen: einfach, ökonomisch und modern. DieGrüneLösung - alles mit nur einem Werkzeug.',
      backgroundImg: dashboardCarouselImg6
    },
  ]

  const items = sliderData.map((item, id) => {
    return <DashboardSliderItem {...item} key={id}/>
  })

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 1,
    cssEase: "linear",
    infinite: true,
  };

  return (
    <section className='dashboard-slider'>
       <Slider {...settings}>
          {items}
        </Slider>
    </section>
  )
}

export default DashboardSlider