import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ListShoe from './components/body_page/ListShoe';
import Profile from './components/Profile.product';
import { useState, createContext, useContext } from 'react';

export const AuthContext = createContext();

function App() {
const [isLogin, setIsLogin] = useState(false)

  return (
    <div>

    <AuthContext.Provider isLogin={isLogin}>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ListShoe />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AuthContext.Provider>
    </div>
  );
}
export default App;
