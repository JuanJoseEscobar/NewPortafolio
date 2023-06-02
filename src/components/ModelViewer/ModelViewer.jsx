import { useLayoutEffect, useState } from "react";
import { useEffect, useRef } from "react";
import useEnviroment from "../../hooks/useEnviroment";
import "./ModelViewer.css";
import * as THREE from "three";
import { Svg } from "@react-three/drei";

export default function ModelViewer() {
  const refModelViewer = useRef(null);
  const [Bool, setBool] = useState(false);
  const [Progress, setProgress] = useState("");
  const [Time, setTime] = useState(0);

  const [isIphone, setIphone] = useState(false);

  //Obtencion de los estados
  const Datos = useEnviroment((state) => state.Datos);
  const Cliente = useEnviroment((state) => state.Cliente);
  const Id = useEnviroment((state) => state.Id);


  //Función que trabaja como un play/pause para la animación 
  // function presionar(e) {

  //   if (Bool == false) {
  //     refModelViewer.current.pause();
  //     e.target.style.backgroundImage =
  //       "url('https://ar.maderkit.com.co/AR/Template2/play.svg')";
  //     setTime(refModelViewer.current.currentTime);
  //     setBool(true);
  //   } else {
  //     refModelViewer.current.play();
  //     e.target.style.backgroundImage =
  //       "url('https://ar.maderkit.com.co/AR/Template2/pause.svg')";
  //     setBool(false);
  //   }
  // }

  //Función de progreso, la cual actuliza la barra de progreso de carga del aplicativo 
  const onProgress = (event) => {
    const progressBar = event.target.querySelector(".progress-bar");
    const updatingBar = event.target.querySelector(".update-bar");
    updatingBar.style.width = `${Math.round(
      event.detail.totalProgress * 100
    )}%`;
    setProgress(updatingBar.style.width);

    if (event.detail.totalProgress === 1) {
      if (refModelViewer.current !== undefined) {
        refModelViewer.current.play();
      }
      progressBar.classList.add("hide");
    } else {
      progressBar.classList.remove("hide");
    }
  };

  // Se actuliza la posicion de la camara, al empezar el aplicativo
  useEffect(() => {
    refModelViewer.current.addEventListener("progress", onProgress);
    refModelViewer.current.cameraOrbit = Datos.PosicionCamara;

    //Condicion si el dispositivo es Android o Iphone
    if (navigator.userAgent.match(/Android/i)) {
      setIphone(false);
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      setIphone(true);
      console.log("This is an iPhone or iPad device");
    } else {
      setIphone(false);
    }
  }, []);

  //-------------Zarasti-Add-Code------------
  const [isLittle, setIsLittle] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 320px)');

    const handleMediaQueryChange = (event) => {
      setIsLittle(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);
    setIsLittle(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <div className="contenedor">
        <model-viewer
          ref={refModelViewer}
          src={`https://ar.maderkit.com.co/3DyMedios/${Cliente}/${Id}/${Datos.Model}.glb`}
          // src={"./duna.glb"}
          // ios-src={`https://ar.maderkit.com.co/AR/${Cliente}/${Id}/${Datos.Model}.usdz`}
          field-of-view="30deg"
          poster={`https://ar.maderkit.com.co/3DyMedios/${Cliente}/${Id}/poster.webp`}
          bounds="tight"
          id="model-viewer"
          ar-modes="scene-viewer webxr quick-look"
          environment-image="legacy"
          camera-controls
          ar
          //Condición de cambiar la exposición en el visualizador
          exposure={isIphone ? "1": "1"}

        >
          <button slot="ar-button"
            style={{
              display: "none",
              flexDirection: "row",
              width: isLittle ? "70%" : "unset",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              height: "45px",
              borderRadius: "4px",
              border: "none",
              boxShadow: "0px 0px 4px rgb(0 0 0 / 15%)",
              padding : "0 10px 0 0",
              position: "fixed",
              top:  "16px",
              right: isLittle ? "5px" : "16px",
              borderRadius: "25px",
            }}>
          {/* <img src="https://ar.maderkit.com.co/AR/Template2/Icono_3D_HC.svg" alt="" /> */}
          <span className="material-symbols-outlined textoBTNAR"  >
            Ver en mi espacio
          </span>
        </button>

        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar">
            <span className="label-bar">{`${Progress}`}</span>
          </div>
        </div>

        {/* <div id="ar-prompt">
          <img src="https://ar.maderkit.com.co/AR/Template2/ar_hand_prompt.png" />
        </div> */}

        {/* <div className="container2">
          <button
            type="button"
            id="reproducir"
            onClick={(e) => {
              presionar(e);
            }}
          ></button>
        </div> */}
      </model-viewer>
    </div>
    </>
  );
}
