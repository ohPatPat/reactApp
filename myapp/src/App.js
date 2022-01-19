import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/partials/header/Header'
import { Main } from './components/partials/main/Main'
import { Greatings } from './components/partials/hilsen/Hilsen'
import { Footer } from './components/partials/footer/Footer'


import { Home } from './components/pages/home/Home'
import { About } from './components/pages/about/About'
import { Shop } from './components/pages/shop/Shop'
import { Info } from './components/pages/info/Info'
import { AboutAgain } from './components/pages/aboutAgain/AboutAgain'
import { NoPage } from './components/pages/noPage/NoPage'

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/info" element={<Info />} />
            <Route path="/aboutAgain" element={<AboutAgain />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Greatings />
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;