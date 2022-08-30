import React, {useEffect} from "react";
import { Routes, Route, useNavigate } from 'react-router-dom'
import { MainLayout } from "./components/Layout/MainLayout";
import { useCurentUser } from "./firebase/firebase-auth";
import { Favorite } from "./routes/Favorite";
import { Main } from "./routes/Main";
import { ProfilePage } from "./routes/ProfilePage";
import { Settings } from "./routes/Settings";
import { SignIn } from "./routes/SignIn";
import { SignUp } from "./routes/SignUp";

function App() {
  const isUser = useCurentUser()
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="profile" element={<ProfilePage user={isUser}/>} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/signIn" element={<SignIn />} /> 
        <Route path="/signUp" element={<SignUp />} /> 
      </Routes>
    </div>
  );
}

export default App;
