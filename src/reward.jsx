import React from "react";

const Reward = ({title,title_content, description,
  description_content, deadline, points_rewards,adicional_rewards,link}) => {
  const rankingElements = [];
  return (
    <>
    <div className="notification-container">
      <h2 className="notification-title">Lider de Puntos</h2>
      <h2 className="notification-title">Recompensa: <a className="focus">Puedes desestimar 2 generos de la proxima película a elegir o desestimar la película elegida</a></h2>
      <h2 className="notification-title">Costo: <a className="focus">Mitad de puntos</a></h2>
      <h2 className="notification-title">Aplicable a: <a className="focus">Líder de puntos</a></h2>
    </div>
    <div className="notification-container">
      <h2 className="notification-title">Quitar un genero</h2>
      <h2 className="notification-title">Descripción: <a className="focus">Puedes quitar un genero de la proxima película a elegir</a></h2>
      <h2 className="notification-title">Costo: <a className="focus">2 puntos</a></h2>
      <h2 className="notification-title">Aplicable a: <a className="focus">Cualquiera</a></h2>
    </div>
    </>
  );
};

export default Reward;