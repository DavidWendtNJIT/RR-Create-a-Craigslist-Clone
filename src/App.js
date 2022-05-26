// Import data
import {postings} from './postings'
// Import components
import './App.css';
import Gallery from "./Gallery";
import Searchbar from './SearchBar';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Gallery postings={postings} />
      </div>
    </div>
  );
}

export default App;
