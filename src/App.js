import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import CreateArea from './components/CreateArea';
import './App.css';
import notes from './notes'

function App() {
  return (
    <div className="App">
      <Header/>
      <CreateArea/>
      {notes.map(noteItem => 
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
        )}
      <Footer/>
    </div>
  );
}

export default App;
 