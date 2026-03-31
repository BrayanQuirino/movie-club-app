import React from "react";

const Reward = ({title,title_content, description,
  description_content, deadline, points_rewards,adicional_rewards,link}) => {
  const rankingElements = [];
  return (
    <>
    <div className="notification-container">
      <h2 className="notification-title">Recompensa: <a className="focus">Regalo especial</a></h2>
      <h2 className="notification-title">Costo: <a className="focus">Todos los puntos</a></h2>
      <h2 className="notification-title">Aplicable a: <a className="focus">Líder de puntos al final de temporada 23 de mayo.</a></h2>
    </div>
    <div className="notification-container">
      <h2 className="notification-title">Recompensa: <a className="focus">Puedes elegir la proxima pelicula a cambio de todos tus puntos</a></h2>
      <h2 className="notification-title">Costo: <a className="focus">Todos tus puntos</a></h2>
      <h2 className="notification-title">Aplicable a: <a className="focus">Todos</a></h2>
    </div>
    </>
  );
};

export default Reward;