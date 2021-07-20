export function Tag(props) {
  return (
    <span
      className={`tag ${props.className ? props.className : ""} ${
        props.type ? props.type : ""
      }`}
    >
      {props.text}
    </span>
  );
}
