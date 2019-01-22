import React from 'react';
import { Link } from 'react-router-dom';
export default function TVShow(props){
  return (
    <Link to={`/${props.id}`} className ='item'>
      <img src={props.image} alt={'old film poster'} />
      <div className='overlay'>
        <h3>{props.name}</h3>
      </div>
    </Link>
  );
}
