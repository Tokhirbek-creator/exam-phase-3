import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { THUNK_GET_ROOMS_FROM_DB } from '../../../redux/thunk/rooms';

function Nav() {
  const { rooms } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(THUNK_GET_ROOMS_FROM_DB());
  }, []);

  return (
    <nav className="deep-purple accent-4">
      <div className="nav-wrapper container">
        <Link to="/" className="brand-logo">Smart House</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {rooms && rooms.map((el) => (
            <li><Link to={`/${el.id}`}>{el.room}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

// {rooms && rooms.map((el) => <h2>{el.room}</h2>)}
