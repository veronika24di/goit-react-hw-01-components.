import PropTypes from 'prop-types';
import { FriendsListt} from './Friend.styled';
import { FriendListItem } from './FriendItem';

export const FriendList = ({ friends }) => {
    return (
        <FriendsListt>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    id={id}
                    avatar={avatar} 
                    name={name}
                    isOnline={isOnline}
                /> 
            ))}
        </FriendsListt>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
};