import { SliderArrow } from '../SliderArrow'
import bannerJPG from '../../assets/images/banner.jpg'
import bannerMobileJPG from '../../assets/images/banner-mobile.jpg'

export function Hero() {
	return (
		<div className="l-hero">
			<a href="/">
				<picture className="l-hero__banner">
					<source media="(min-width:650px)" srcSet={bannerJPG} />
					<source media="(min-width:0)" srcSet={bannerMobileJPG} />
					<img src={bannerJPG} alt={bannerJPG} />
				</picture>
			</a>

			<div className="l-hero__arrow-left">
				<SliderArrow />
			</div>
			<div className="l-hero__arrow-right">
				<SliderArrow direction="right" />
			</div>

			<div className="l-hero__control-container">
				<ul>
					<li>
						<a
							className="l-hero__control-item l-hero__control-item--is-active"
							href="/"
						>
							&nbsp;
						</a>
					</li>
					<li>
						<a className="l-hero__control-item" href="/">
							&nbsp;
						</a>
					</li>
					<li>
						<a className="l-hero__control-item" href="/">
							&nbsp;
						</a>
					</li>
					<li>
						<a className="l-hero__control-item" href="/">
							&nbsp;
						</a>
					</li>
					<li>
						<a className="l-hero__control-item" href="/">
							&nbsp;
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
