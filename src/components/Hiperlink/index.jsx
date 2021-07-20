export function Hiperlink({ size, href, link }) {
  return (
    <a href={href} className={`hiperlink__${size}`}>
      {link}
    </a>
  );
}
