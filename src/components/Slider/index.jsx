

import Slick from "react-slick"

export function Slider({ title = 'Title', items }) {

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  }

  return (
    <div className="l-slider">
      <h2 className="l-slider__title">{title}</h2>
      <Slick {...settings}>
        {
          items.map(item => (
            <a href="/" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3 className="l-slider__item-title">
                {item.title}
              </h3>
            </a>
          ))
        }
      </Slick>
    </div>
  )
}