import React from 'react';
import TVShow from './TVShow';
import tvPoster1 from './images/tvposter1.jpeg';
import tvPoster2 from './images/tvposter2.jpeg';
import tvPoster3 from './images/tvposter3.jpeg';
import tvPoster4 from './images/tvposter4.jpeg';
import tvPoster5 from './images/tvposter5.jpeg';
import tvPoster6 from './images/tvposter6.jpeg';




export default function Gallery() {
  return (
    <div>
      <div className='crate'>
        <TVShow id='sideswiped' name='sideswiped' image={tvPoster1} />
        <TVShow id='women-on-the-verge' name='Women on The Verge' image={tvPoster2} />
        <TVShow id='the-tracey-morgan-show' name='The Tracey Morgan Show' image={tvPoster3} />
        <TVShow id='the-men-who-built-america' name='The Men who Built America' image={tvPoster4} />
        <TVShow id='atlanta' name='Atlanta' image={tvPoster5} />
        <TVShow id='out-of-this-world' name='Out of This World' image={tvPoster6} />
      </div>
    </div>

  );
}

function newGallery() {
  return [
    { id: 'sideswiped', name: 'Sideswiped', image: tvPoster1 },
    { id: 'women on the verge', name: 'Women on the Verge', image: tvPoster2 },
    { id: 'the tracey morgan show', name: 'The Tracey Morgan Show', image: tvPoster3 },
    { id: 'the men who built america', name: 'The Men Who Built America', image: tvPoster4 },
    { id: 'atlanta', name: 'Atlanta', image: tvPoster5 },
    { id: 'out of this world', name: 'Out of this World', image: tvPoster6 }

  ];

}