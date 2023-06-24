import React from 'react';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  const profileStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={profileStyle}>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      {children}
      <button style={buttonStyle} onClick={handleName}>
        Show Name
      </button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'Unknown',
};

export default Profile;
