import React from "react";
import Notification from "./Notification";
import notifications from "./utils/jsons/notifications.json"

const Notifications = () => {

  const notificationsElements = [];

  for(let i=0;i<notifications.length; i++){
    notificationsElements.push(
      <Notification 
      title = {notifications[i].title}
      title_content = {notifications[i].title_content}
      description = {notifications[i].description}
      description_content = {notifications[i].description_content}
      deadline = {notifications[i].deadline}
      points_rewards = {notifications[i].points_rewards}
      adicional_rewards = {notifications[i].adicional_rewards}
      link = {notifications[i].link}
      />
    )
  }

  return (
    <>
    {notificationsElements}
    </>
    
  );
};

export default Notifications;