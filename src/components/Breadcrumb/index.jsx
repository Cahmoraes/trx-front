export function Breadcrumb({ list }) {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        {list.map((item, i) => (
          <>
            {i !== 0 && <span className="breadcrumb__icon">{"|"}</span>}
            <li>
              {list.lastIndexOf(item) === list.length - 1 ? (
                <span className="active">{item.link}</span>
              ) : (
                <a href={item.href}>{item.link}</a>
              )}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
