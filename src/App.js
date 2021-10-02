import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router}from 'react-router-dom'

function App() {
  return (
    <div>
      <Header></Header>
      <Router><
      <Shop></Shop>
      
    </div>
  );
}

export default App;
