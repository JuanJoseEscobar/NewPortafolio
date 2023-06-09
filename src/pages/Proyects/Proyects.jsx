import { Proyect } from './Proyect';
import './Proyects.scss';


const Proyects = () => {
  return (
    <div id="boxProyects">
        <Proyect
          NavTo = {"./FirstScene"}
          SrcImage = {"./fristProyecImage.jpg"}
          Titulo = {"Scena Simple"}
          Descripcion = {"Se realizo un acercamiento a T3F con unos ejercicios censillos."}
        />

        <Proyect
          NavTo = {"./SecondScene"}
          SrcImage = {"./fristProyecImage.jpg"}
          Titulo = {"Fondo Animado"}
          Descripcion = {"Prueba de fondo con threefiber."}
        />

        <Proyect
          NavTo = {"./ThirdScene"}
          SrcImage = {"./fristProyecImage.jpg"}
          Titulo = {"Interaccion"}
          Descripcion = {"Se genera una interacion con los objectos de la scena."}
        />

        <Proyect
          NavTo = {"./TransformControls"}
          SrcImage = {"./fristProyecImage.jpg"}
          Titulo = {"Controles"}
          Descripcion = {"Se genera una interacion con los controladores de transformacion de los objectos."}
        />

        <Proyect
          NavTo = {"./UiDebug"}
          SrcImage = {"./fristProyecImage.jpg"}
          Titulo = {"UI"}
          Descripcion = {"se crea un UI para controlar los objectos."}
        />
        
    </div>
  );
}

export default Proyects;