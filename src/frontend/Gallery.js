import React from 'react';
import TVShow from './TVShow';
import newGallery from './newGallery';


export default function Gallery() {
  return (
    <div>
      <div className='crate'>
        {
          newGallery().map(tvshow => (
            <TVShow
              key={tvshow.id}
              id={tvshow.id}
              name={tvshow.name}
              image={tvshow.image} />

          ))
        }
      </div>
    </div>
  );
}
