//import "../style.css";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import ModelViewer from "../components/ModelViewer/ModelViewer";
import QrSession from "../components/QrSession/QrSession";
import useEnviroment from "../hooks/useEnviroment";


export default function App() {

  const { post, params } = useLoaderData();

  const CargarDatos = useEnviroment((state) => state.CargarDatos);
  const CargarId = useEnviroment((state) => state.CargarId);
  const ActualizarCliente = useEnviroment((state) => state.ActualizarCliente);

  //Se cargan los datos, en un global state.
  CargarDatos(post);
  CargarId(params.id);

  params.id.toString();

  //Se actaliza el cliente dependiendo de la referencia
  useEffect(() => {
    if (params.id[0].includes("M")) {

    ActualizarCliente("Maderkit");

  } else if (params.id[0].includes("P")) {

    ActualizarCliente("Practimac");

  }
  }, []);


  return (
    <>
    <title>{post.name}</title>
    <div className="center">
      <ModelViewer/>
      {/* <QrSession/> */}
    </div>
      

    </>
  );
}
// Función para obtener la información del data.json correspondiente al mueble
export const loaderPost = async ({ params }) => {
  params.id.toUpperCase();
  
  //Para probar en local
  // const data = await fetch(`./data.json`);
  
  var data=null;
  if (params.id[0] == "M") {
    data = await fetch(
      `https://ar.maderkit.com.co/3DyMedios/Maderkit/${params.id}/data.json`
    );

  } else if (params.id[0] == "P") {
    data = await fetch(
      `https://ar.maderkit.com.co/3DyMedios/Practimac/${params.id}/data.json`
    );

  }

  const post = await data.json();

  return { post,params };
};
