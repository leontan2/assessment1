import logo from './logo.svg';
import './App.css';
import AuthorForm from './pages/AuthorForm';
import UsersList from './pages/UsersList';

function App() {
  return (
    <div className="App">
      <AuthorForm /> 
      <UsersList />
    </div>
  );
}

export default App;
