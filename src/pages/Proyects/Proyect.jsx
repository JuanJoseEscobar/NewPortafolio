import { Link, NavLink } from "react-router-dom";

export const Proyect = ({NavTo, SrcImage, Titulo, Descripcion}) => {
  return (
    <NavLink className="contentProyect" to={NavTo}>
      <img
        className="ImgPryects"
        src={SrcImage}
        alt="proyectoIMG"
      />
      <div className="descriptionContent">
        <h2>{Titulo}</h2>
        <p>{Descripcion}</p>
      </div>
    </NavLink>
  );
};
