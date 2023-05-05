import { PropTypes } from 'prop-types';
import css from './Friends.module.css';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span id="status" className={css.status}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  //   isOnline: PropTypes.boolean,
};
export default FriendItem;
