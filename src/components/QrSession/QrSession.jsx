import useEnviroment from "../../hooks/useEnviroment";
import "./QrSession.css";

export default function QrSession() {
  const Datos = useEnviroment((state) => state.Datos);
  const Cliente = useEnviroment((state) => state.Cliente);
  const Id = useEnviroment((state) => state.Id);
  return (
    <>
      {/* Se integra una sesion al lado derecho, donde se integra el codigo QR */}
      <div className="right">
        <img
          src={`https://3dymedios.com/AR/${Cliente}/${Id}/qr.svg`}
          alt=""
          
        />
      </div>
    </>
  );
}
