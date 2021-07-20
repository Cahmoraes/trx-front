export function Title({
  titleTag: TitleTag = "h2",
  children,
  size = "heading-2",
  weight = "bold",
  color = "primary",
  className
}) {
  return <TitleTag className={`title ${size} ${weight} ${color} ${className}`}>{children}</TitleTag>;
}
