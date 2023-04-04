import { useState } from 'react';

const Controls = () => {
  // Creating the states of tracks to display
  const [tracks, setTracks] = useState([
    {title: 'Song name', artist: 'Artist name', id: 1},
    {title: 'Song name', artist: 'Artist name', id: 2},
    {title: 'Song name', artist: 'Artist name', id: 3},
    {title: 'Song name', artist: 'Artist name', id: 4},
    {title: 'Song name', artist: 'Artist name', id: 5}
  ]);

  return ( 
    <div className="flex-container">
     {tracks.map((track) => (
      // What is key={}?
      <div className="flex-container">
        <div className="track-preview" key={track.id}>
        <h2>{ track.title }</h2>
        <p>{ track.artist }</p>
      </div>
      </div>
      
     ))}
    </div> 
   );
}
 
export default Controls;