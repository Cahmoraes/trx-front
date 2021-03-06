import { useState } from 'react'
import { ProductGallery } from '../ProductGallery'

import { ReactComponent as ArrowLeftIcon } from '../../../assets/images/icons/arrow-large-left.svg'
import { ReactComponent as ArrowRightIcon } from '../../../assets/images/icons/arrow-large-right.svg'
import { ReactComponent as ExpandIcon } from '../../../assets/images/icons/expand.svg'

export function ProductCarousel({ productImages = [] }) {
	const [galleryState, setGalleryState] = useState(false)

	if (productImages.length === 0) return null

	return (
		<div className="c-product-carousel">
			<img
				onClick={() => setGalleryState(true)}
				className="c-product-carousel__destaque"
				src={productImages[0].src}
				alt={productImages[0].description}
			/>
			{galleryState && (
				<ProductGallery
					setGalleryState={setGalleryState}
					productImages={productImages}
				/>
			)}
			<div className="c-product-carousel__items">
				<button className="c-product-carousel__arrow">
					<ArrowLeftIcon />
				</button>
				{productImages.slice(1).map((image, index) =>
					index === 0 ? (
						<button
							key={image.id}
							className="c-product-carousel__item c-product-carousel__item--active"
						>
							<img src={image.src} alt={image.description} />
						</button>
					) : (
						<button key={image.id} className="c-product-carousel__item">
							<img key={image.src} src={image.src} alt={image.description} />
						</button>
					)
				)}
				<button className="c-product-carousel__arrow">
					<ArrowRightIcon />
				</button>
			</div>

			<div className="c-product-carousel__control-container">
				<ul>
					<li>
						<a
							className="c-product-carousel__control-item c-product-carousel__control-item--is-active"
							href="/"
						>
							&nbsp;
						</a>
					</li>
					<li>
						<a className="c-product-carousel__control-item" href="/">
							&nbsp;
						</a>
					</li>
					<li>
						<a className="c-product-carousel__control-item" href="/">
							&nbsp;
						</a>
					</li>
					<li>
						<a className="c-product-carousel__control-item" href="/">
							&nbsp;
						</a>
					</li>
					<li>
						<a className="c-product-carousel__control-item" href="/">
							&nbsp;
						</a>
					</li>
				</ul>
				<button
					className="c-product-carousel__control-expand"
					onClick={() => setGalleryState(true)}
				>
					<ExpandIcon />
				</button>
			</div>
		</div>
	)
}
