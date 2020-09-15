import React, { useState } from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

function App() {


  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('https://api.unsplash.com/search/photos',
      {
        params: { query: term }
      })
    console.log(response.data.results);
    setImages(response.data.results)
    return response;

  }

  return (
    <>
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearchSubmit={onSearchSubmit} />
        <ImageList images={images} />
      </div>

    </>
  );
}

export default App;
