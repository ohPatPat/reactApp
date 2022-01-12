import './App.css';
import {Header} from './components/partials/header/Header'
import {Nav} from './components/partials/nav/Nav'
import {Main} from './components/partials/main/Main'
import {Footer} from './components/partials/footer/Footer'

const navigation = [
  "Forside",
  "Produkter",
  "Om os",
  "Ledige stillinger",
  "Kontakt os"
]


function App() {
  return (
    <div className="siteWrapper">
      <Header title="My first reactApp"/>
      <div className="gridWrapper">
      <Nav navigation={navigation}/>
      <Main/>
      </div>
      <Footer navigation={navigation}/>
    </div>
  );
}

export default App;
