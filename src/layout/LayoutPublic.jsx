import { Outlet } from "react-router-dom";
import NavHeader from "../components/NavHeader/NavHeader";

const LayoutPublic = ()=>{
    return (
        <>
        {/* Layout desarrollado para pruebas */}
        {/* <Navbar/> */}
        <main>
            <NavHeader/>
            <Outlet/>
        </main>
        </>
    )
}
export default LayoutPublic;