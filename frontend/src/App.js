import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

import { useState } from 'react';



const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(searchTerm)
  }

  return (
    <div>
      <Header title="Image Gallery" />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearchSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
