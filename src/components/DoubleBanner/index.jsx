export function DoubleBanner({ config }) {
  return (
    <div className="l-double-banner">
      {
        config.map(banner => (
          <a className="l-double-banner__container" href={banner.url}>
            <picture>
              {
                banner.images.map(image => (
                  <source media={image.media} srcSet={image.src} alt={image.alt} />
                ))
              }
              <img className="u-centralize" src={banner.images[0].media} alt={banner.images[0].alt} />
            </picture>
          </a>
        ))
      }
    </div>
  )
}