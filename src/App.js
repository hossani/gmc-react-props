import React from 'react';
import MyProfile from './components/MyProfile.jsx'
import './App.css';

const App = () => {
  const handleName = () => {
    const fullName = 'John Doe';
    alert(`Profile user's name is: ${fullName}`);
  };

  return (
    <div className="App">
      <h1>My Profile</h1>
      <MyProfile
        fullName="John Smith"
        bio="I'm a web developer"
        profession="Software Enginer"
        handleName={handleName}
      >
        <img src="profile-image.jpg" alt="Profile" />
      </MyProfile>
    </div>
  );
};

export default App;
