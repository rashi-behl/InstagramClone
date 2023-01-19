import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import UserInfo from './Components/UserInfo';
import PhotoGrid from './Components/PhotoGrid';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <UserInfo/>
      <PhotoGrid/>
      <Footer/>
    </div>
  );
}

export default App;
