import { ReactComponent as ArrowLeft } from '../../assets/images/icons/arrow-large-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/images/icons/arrow-large-right.svg'

export function SliderArrow({ sense="left", ...rest }) {
  return (
    <button
      {...rest}
      className="c-slider-arrow"
    >
      {
        sense === "left" ? 
        <ArrowLeft /> :
        <ArrowRight />
      }
    </button>
  )
}