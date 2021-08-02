import { ReactComponent as ArrowLeft } from '../../assets/images/icons/arrow-large-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/images/icons/arrow-large-right.svg'

export function SliderArrow({ direction="left", hasBg = true, ...rest }) {
  return (
    <button
      {...rest}
      className={`c-slider-arrow ${hasBg ? 'is-background':''}`}
    >
      {
        direction === "left" ? 
        <ArrowLeft /> :
        <ArrowRight />
      }
    </button>
  )
}