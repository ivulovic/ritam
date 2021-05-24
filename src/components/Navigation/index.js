import {
  NavLink as Link
} from "react-router-dom";
import './styles.scss';
export default function Navigation() {
  const rhytmsFromStorage = JSON.parse(localStorage.getItem("rhythms")) || {};
  return (
    <div className="menu">
      <nav>
        <div className="nav__group">
          <div className="nav__group-title">Navigation</div>
          <ul className="nav__group-list">
            <li className="group-list__item">
              <Link exact className="item__text" to="/">Home</Link>
            </li>
            <li className="group-list__item">
              <Link className="item__text" to="/drums">Drums</Link>
            </li>
          </ul>
        </div>
        <div className="nav__group">
          <div className="nav__group-title">Your beats</div>
          <ul className="nav__group-list">
            {Object.keys(rhytmsFromStorage).map(k => (
              <li key={k} className="group-list__item">
                <Link className="item__text" to={`/samples/${k}/rhythms`}>{k}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}