import React from 'react';
import { ProfileHeader, UserProfile } from './style';

interface UserProfileHeaderProps {
  name: string;
  country: string;
  relationship: string;
  buttonContent?: string;
  handleButton?: () => void;
}
const UserProfileHeader: React.FC<UserProfileHeaderProps> = ({
  name,
  country,
  relationship, 
  buttonContent,
  handleButton,
}) => {
  return (
    <ProfileHeader>
      <UserProfile>
        <img src='https://i.imgur.com/jguCgC7.png' alt="" />
        <h2>{name}</h2>
        <p>{relationship}, {country}</p>
      </UserProfile>
      {
        buttonContent && <button onClick={handleButton}>{buttonContent}</button>
      }
    </ProfileHeader>
  );
};

export default UserProfileHeader;