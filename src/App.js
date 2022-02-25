import logo from './logo.svg';
import './App.css';
import GitHubApi from './GitHubApi';
import Api from './Api';
function App() {
  return (
    <div className="App">
      <Api></Api>
      <GitHubApi></GitHubApi>
    </div>
  );
}

export default App;
