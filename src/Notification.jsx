import React from "react";

const Notification = ({title,title_content, description,
  description_content, deadline, points_rewards,adicional_rewards,link}) => {
  const rankingElements = [];
  return (
    <div className="notification-container">
      <h2 className="notification-title">{title}<a className="focus" href={link}>{title_content}</a></h2>
      <h2 className="notification-title">{description}<a className="focus"> {description_content}</a></h2>
      <h2 className="notification-title">Deadline: <span className="focus" ></span> {deadline}</h2>
      <h2 className="notification-title">Puntos de recompensa: <a className="focus">{points_rewards}</a></h2>
      <h2 className="notification-title">Puntos adicionales: <a className="focus">{adicional_rewards}</a></h2>
    </div>
  );
};

export default Notification;