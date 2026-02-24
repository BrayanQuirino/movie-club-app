import React from "react";
import RankingItem from "./rankingItem.jsx";
import people from "./utils/people.json";

const Ranking = () => {
  const rankingElements = [];

  people.sort((a,b)=> b.points -a.points);
  people.forEach((p,index)=>{p.id = index+1;})

  for (let i = 0; i < people.length; i++) {
    rankingElements.push(
      <RankingItem
        key={people[i].id}
        position={people[i].id}
        image={people[i].image}
        last_name = {people[i].last_name}
        name={people[i].name}
        points={people[i].points}
        title = {people[i].title}
      />
    );
  }

  return (
    <div className="ranking-container">
        <h2 className="title-secction">Ranking</h2>
        <div className="ranking-container">
        {rankingElements}
        </div>
    </div>
    
  );
};

export default Ranking;