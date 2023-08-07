import logo from './logo.svg';
import './App.css';
import AppRouter from './routes/Routes';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
