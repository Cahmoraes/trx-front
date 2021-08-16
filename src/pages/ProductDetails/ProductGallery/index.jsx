import { ReactComponent as CloseIcon } from '../../../assets/images/icons/close.svg'
import { ReactComponent as ArrowLeftIcon } from '../../../assets/images/icons/arrow-large-left.svg'
import { ReactComponent as ArrowRightIcon } from '../../../assets/images/icons/arrow-large-right.svg'

export function ProductGallery({ productImages, setGalleryState }) {
  if (!productImages.length) return null
  return (
    <div className="c-product-gallery">
      <div className="c-product-gallery__container">
        <header className="c-product-gallery__header">
          <button className="c-product-gallery__close" onClick={() => setGalleryState(false)}>
            <CloseIcon />
          </button>
        </header>

        <main className="c-product-gallery__main">
          <p className="c-product-gallery__slide-position">1 de 8</p>
          <img src={productImages[0].src} alt={productImages[0].description} />
        </main>

        <footer className="c-product-gallery__footer">
          <button className="c-product-gallery__arrow"><ArrowLeftIcon /></button>
          {
            productImages.slice(1).map((image, index) => (
              index === 0 ? (
                <button key={image.id} className="c-product-gallery__item c-product-gallery__item--active">
                  <img
                    src={image.src}
                    alt={image.description}
                  />
                </button>
              ) : (
                <button key={image.id} className="c-product-gallery__item">
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.description}
                  />
                </button>
              )
            ))
          }
          <button className="c-product-gallery__arrow"><ArrowRightIcon /></button>
        </footer>
      </div>
    </div>
  )
}