import { Fragment } from 'react';

export function Breadcrumb({ list }) {
  return (
    <div className="c-breadcrumb">
      <ul className="c-breadcrumb__list">
        {list.map((item, index) => (
          <Fragment key={item.link}>
            {index !== 0 && <span className="c-breadcrumb__icon">{"|"}</span>}
            <li>
              <a className={`c-breadcrumb__item ${index === list.length - 1 ? 'c-breadcrumb__item--active' : ''}`} href={item.href}>
                {item.link}
              </a>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
