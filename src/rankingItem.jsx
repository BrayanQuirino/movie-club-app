import React from "react";
import './index.css'
const RankingItem = ({ position,image, name, last_name, points,title }) => {
  return (
    <div className = 'item-container'>
      <div className="position-container"><h1 className="position">{position}. </h1></div>
      <div className='image-container'>
        <img src={image} alt={name} className = 'image' />
        {/*<p className="paragraph-title">{title}</p>*/}
      </div>

      <div className = 'item-text-container'>
        <h2 className= 'paragraph-name'>{name}</h2>
        <h2 className= 'paragraph-last-name'>{last_name}</h2>
      </div>

      <div className="points-container">
        <h2 className="points-text">Points</h2>
        <h2 className="points">{points}</h2>
      </div>
    </div>
  );
};

export default RankingItem;