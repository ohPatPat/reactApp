import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/partials/header/Header'
import { Main } from './components/partials/main/Main'
import { Footer } from './components/partials/footer/Footer'
import { Home } from './components/pages/home/Home'
import { About } from './components/pages/about/About'

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;