import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  return (
    <div className="bg-container">
      <h1>PLANETS</h1>
      <div data-testid="planets" className="slider-container">
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem planetItem={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
