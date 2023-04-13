import PropTypes from 'prop-types'
import { Avatar, Name,Status, Item } from './Friend.styled';

export const FriendListItem = ({avatar, name, isOnline, id}) => {
    return (
        <Item>
            <Status isOnline={isOnline}>{isOnline}</Status>
            <Avatar  src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    )
}
    
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number,
};
