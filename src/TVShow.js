import React from 'react';
export default function TVShow(props){
  return (
    <div className='item'>
      <img src={props.image} alt={'old film poster'} />
      <div className='overlay'>
        <h3>{props.name}</h3>
      </div>
    </div>
  );
}
