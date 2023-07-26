import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/pages/Login';
import Notes from './component/pages/Notes';
import Signup from './component/pages/Signup';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import UserContextData from './component/context/UserContext';
import NotesContextData from './component/context/NotesContext';

function App() {
  return (
    <BrowserRouter>
      <UserContextData>
        <NotesContextData>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
          <Footer />
        </NotesContextData>
      </UserContextData>
    </BrowserRouter >
  );
}

export default App;
