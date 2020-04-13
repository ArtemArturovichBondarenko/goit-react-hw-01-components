import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline = false }) => (
  <>
    <span className={isOnline ? styles.statusTrue : styles.statusFaulse }></span>
    <img className={styles.avatar} src={avatar} alt={name} width="80" />
    <p className={styles.name}>{name}</p>
  </>
);

FriendListItem.defaultProps = {
  alt: 'foto',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  alt: PropTypes.string,
};

export default FriendListItem;
