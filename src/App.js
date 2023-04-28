
import Layout from './components/UI/Layout';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminChurch from './components/Admin/AdminChurch';
import Home from './components/Home/Home'
import Predication from './components/Predication/Predication'
import Contact from './components/Contact/Contact'
import PagePredication from './components/Predication/PagePredication';
import BibleStudies from './components/Predication/BibleStudies';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/Contact" element={ <Contact /> } />
          <Route path="/PagePredication" element={ <PagePredication /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="/AdminChurch" element={ <AdminChurch /> } />
          <Route path="/Predication" element={ <Predication /> } />
          <Route path="/EtudesBiblique" element={ <BibleStudies /> } />
        </Routes> 
      </Layout>
    </Router>
  );
}

export default App;
