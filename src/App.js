import logo from './logo.svg';
import './App.css';
import AdressForm from './components/forms/AdressForm'
import AdressView from './components/View/AdressView'

function App() {
  return (
    <div className="App">
      <AdressView/>
      <AdressForm/>
    </div>
  );
}

export default App;
