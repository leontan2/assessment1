import './App.css';
import AuthorForm from './pages/AuthorForm';
import UsersList from './pages/UsersList';

function App() {
  return (
    <div className="App">
      <div className="left-panel">
        <AuthorForm />
      </div>
      <div className="right-panel">
        <UsersList />
      </div>
    </div>
  );
}


export default App;
