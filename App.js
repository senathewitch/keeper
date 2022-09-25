import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Note
        title="the title"
        content="icerikgi"
        />
      <Footer/>
    </div>
  );
}

export default App;
 