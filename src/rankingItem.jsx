import React from "react";
import './index.css'
const RankingItem = ({ position,image, name, last_name, points,title }) => {
  return (
    <div className = 'item-container'>
      <div className='image-container'>
        <img src={image} alt={name} className = 'image' />
        <p className="paragraph-title">{title}</p>
      </div>

      <div className = 'item-text-container'>
        <p className= 'paragraph-name'>{name}</p>
        <p className= 'paragraph-last-name'>{last_name}</p>
        <p className= 'paragraph-last-name'>Position: {position}</p>
        <p className= 'paragraph-points'>Points: {points}</p>
      </div>
    </div>
  );
};

export default RankingItem;