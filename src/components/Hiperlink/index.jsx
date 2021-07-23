export function Hiperlink({ size, href, children }) {
  return (
    <a href={href} className={`hiperlink hiperlink__${size}`}>
      {children}
    </a>
  );
}
