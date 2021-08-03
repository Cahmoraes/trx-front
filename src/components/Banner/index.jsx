export function Banner({ config }) {
  return (
    <a className="l-banner" href={config.url}>
      <picture className={`l-banner__container`}>
        {
          config.images.map(image => (
            <source key={image.src} media={image.media} srcSet={image.src} alt={image.alt} />
          ))
        }
        <img className="u-centralize" src={config.images[0].media} alt={config.images[0].alt} />
      </picture>
    </a>
  )
}