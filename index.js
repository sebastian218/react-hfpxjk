import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { getWorksheet } from 'gsheets';
import Hello from './Hello';
import './style.css';
import albumArt from 'album-art';

const App = () => {
  const album = 'Rush';
  const [album, setAlbum] = useState('');
  //1JsLKjKMGWb8qtlgYotTl7xl2ULR_a7_z8tD3Cmpcrfc
  //https://docs.google.com/spreadsheets/d/e/2PACX-1vTCoukrmd4wprI7eB83soPSEptx8127NUwgPs7_AZgVuuFmActFBOmd9shnE4WieWdM3RF2te534Vrp/pubhtml
  useEffect(() => {
    albumArt( 'Acdc', {album: 'live'} ).then(setAlbum)

    getWorksheet('1JsLKjKMGWb8qtlgYotTl7xl2ULR_a7_z8tD3Cmpcrfc', 'stock')   .then(res => console.log(res));

 
  }, []); 


  return (
    <div>
      Hello

      <img src={album} />
    </div>
  )
}

render(<App />, document.getElementById('root'));
