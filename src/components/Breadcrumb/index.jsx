export function Breadcrumb({ list }) {
  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__list">
        {list.map((item, index) => (
          <>
            {index !== 0 && <span className="breadcrumb__icon">{"|"}</span>}
            <li>
              <a className={`breadcrumb__item ${index === list.length - 1 ? 'breadcrumb__item--active' : ''}`} href={item.href}>
                {item.link}
              </a>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
