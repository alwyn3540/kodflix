import React from 'react';
import TVShow    from  './TVShow';
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
        <TVShow name='sideswiped' image={tvPoster1} />
        <TVShow name='Women on The Verge' image={tvPoster2} />
        <TVShow name='The Tracey Morgan Show' image={tvPoster3} />
      </div>
      <div className='crate'>
  <TVShow name='The Men who Built America' image={tvPoster4}/>
  <TVShow name='Atlanta' image={tvPoster5} />
      <TVShow name='Out of This World' image={tvPoster6} />
    </div>
</div >

  );
}