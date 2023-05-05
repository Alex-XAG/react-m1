import FriendItem from '../Friends/Friends';
import friends from '../../friends';
import css from './Friends.module.css';

const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <FriendItem key={friend.id} avatar={friend.avatar} name={friend.name} />
      ))}
    </ul>
  );
};

export default FriendList;
