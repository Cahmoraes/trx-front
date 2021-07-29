import { SliderArrow } from '../SliderArrow'
import bannerJPG from '../../assets/images/banner.jpg'

export function Hero() {
  return (
    <div className="l-hero">
      
      <div className="l-hero__banner">
        <img src={bannerJPG} alt="Banner" />
      </div>

      <div className="l-hero__arrow-container">
        <SliderArrow />
        <SliderArrow sense="right" />
      </div>
    </div>
  )
}