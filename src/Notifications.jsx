import React from "react";
import Notification from "./Notification";

const Notifications = () => {
  return (
    <div className="notifications-container">
      <Notification 
      title = {"Pelicula: En presencia del diablo"}
      description = "Deadline:"
      focus = "8 de marzo de 2026"
      link = 'https://tv.apple.com/mx/movie/en-presencia-del-diablo/umc.cmc.1d0v0i3zq96z746mztcrggw65'
      />
      <Notification 
      title = {"Actividad de la semana: FotoCopia"}
      description = "Intenta sacar una foto que se parezca a una escena de la pelicula."
      focus = "Subir la foto al whats 1 punto. La mejor foto 3 puntos (a votación) Deadline: 8 de marzo de 2026"
      link = 'https://tv.apple.com/mx/movie/en-presencia-del-diablo/umc.cmc.1d0v0i3zq96z746mztcrggw65'/>
    </div>
  );
};

export default Notifications;