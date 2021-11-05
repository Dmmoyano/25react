import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import  Formulario  from './components/Form/Formulario';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
    <Header/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Formulario/>
    <Footer/> 
    </div>
  );
}

export default App;
