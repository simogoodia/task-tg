import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap'; 
import Navbar from "./components/navbar/index";
import LandingPage from "./components/landing-page/index";
import Footer from "./components/footer/index";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
