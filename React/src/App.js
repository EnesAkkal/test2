import { Navigate, Route, Routes } from 'react-router-dom';
import LoginFormPageComponent from 'components/LoginFormPageComponent.js';
import HomePageComponent from './components/HomePageComponent.js';
import UserProfile from 'components/UserProfile/UserProfile.js';
import Post from 'components/Post.js';
import CommunityPostComponent from 'components/CommunityPostComponent.js';
import ProfilePageComponent from "./components/ProfilePageComponent.js";
import CreateCommunityComponent from "./components/CreateCommunityComponent.js";
import CommunityComponent from 'components/CommunityComponent.js';
import RequireAuth from "./components/ReqiureAuth.js";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginFormPageComponent />} />
      <Route element={<RequireAuth />} >
        <Route path="/" element={<LoginFormPageComponent />} />y
        <Route path="/home" element={<HomePageComponent />} />y

        <Route path="/user/:activepage" element={<UserProfile />} />
        <Route path="/createpost" element={<Post />} />
        <Route path="/community/createpage" element={<CreateCommunityComponent />} />
        <Route path="/profile" element={<ProfilePageComponent />} />
        <Route path="/communitypost" element={<CommunityPostComponent />} />
        <Route path="/communityinfo" element={<CommunityComponent />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>


  );
}

export default App;
