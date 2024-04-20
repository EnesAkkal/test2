import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginFormPageComponent from 'components/LoginFormPageComponent.js';
import HomePageComponent from './components/HomePageComponent.js';
import UserProfile from 'components/UserProfile.js';
import Post from 'components/Post.js';
import ProfileComponent from 'components/ProfileComponent.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginFormPageComponent />} />
        <Route path="/home" element={<HomePageComponent />} />
        <Route path="/user/:activepage" element={<UserProfile/>} />
        <Route path="/createpost" element={<Post/>} />
        <Route path="/profile" element ={<ProfileComponent/>} />       
      </Routes>
    </Router>
  );
}

export default App;
