export function DoubleBanner({ config }) {
  return (
    <div className="l-double-banner">
      {
        config.map(banner => (
          <a key={banner.id} className="l-double-banner__container" href={banner.url}>
            <picture>
              {
                banner.images.map(image => (
                  <source key={image.src} media={image.media} srcSet={image.src} alt={image.alt} />
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