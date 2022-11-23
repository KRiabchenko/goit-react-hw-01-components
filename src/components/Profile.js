import PropTypes from 'prop-types'

export const Profile = ({ user }) => { 
    const {username, tag, location, avatar, stats} =user;
    return <div>
        <h2>{username}</h2>
        <div>
            <div>@{tag}</div>
            <div>{location}</div>
            <div>{avatar}</div>
        </div>
        <ul>
            <li>
            <span>Followers</span>
            <span>{stats.followers}</span>
            </li>
            <li>
            <span>Views</span>
            <span>{stats.views}</span>
            </li>
            <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
            </li>
        </ul>
</div>
};

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
    })
}