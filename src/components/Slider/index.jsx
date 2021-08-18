import { ReactComponent as ArrowLeft } from '../../assets/images/icons/arrow-large-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/images/icons/arrow-large-right.svg'

export function Slider({ title, items, category = false }) {
	return (
		<div className={`l-slider ${category ? 'l-slider--category' : ''}`}>
			{title && <h2 className="l-slider__title">{title}</h2>}
			<div className="l-slider__container">
				{items.map((item) => (
					<a className="l-slider__item" href="/" key={item.title}>
						<img src={item.image} alt={item.title} />
						<h3 className="l-slider__item-title">{item.title}</h3>
						<div className="l-slider__container-price">
							{item.oldPrice && (
								<span className="l-slider__oldPrice">{`de ${item.oldPrice}`}</span>
							)}
							{item.price && (
								<span className="l-slider__price">
									{`${item.oldPrice ? 'por ' : ' '} ${item.price}`}
								</span>
							)}
						</div>
					</a>
				))}
			</div>

			<div className="l-slider__arrow-container">
				<button className="l-slider__arrow l-slider__arrow--is-disabled">
					<ArrowLeft />
				</button>
				<button className="l-slider__arrow">
					<ArrowRight />
				</button>
			</div>

			<div className="l-slider__control-container">
				<ul>
					<li>
						<a
							className="l-slider__control-item l-slider__control-item--is-active"
							href="/"
						>
							&nbsp;
						</a>
					</li>
					<li>
						<a className="l-slider__control-item" href="/">
							&nbsp;
						</a>
					</li>
					<li>
						<a className="l-slider__control-item" href="/">
							&nbsp;
						</a>
					</li>
					<li>
						<a className="l-slider__control-item" href="/">
							&nbsp;
						</a>
					</li>
					<li>
						<a className="l-slider__control-item" href="/">
							&nbsp;
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
