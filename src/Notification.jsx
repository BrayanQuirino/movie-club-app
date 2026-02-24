import React from "react";

const Notification = ({title, description,focus,link}) => {
  const rankingElements = [];
  return (
    <div className="notification-container">
      <h2 className="title-secction negative"><a className="link" href={link} target="_blank" rel="noopener noreferrer">{title}</a></h2>
      <div>{description}<p className="focus">{focus}</p></div>
    </div>
  );
};

export default Notification;