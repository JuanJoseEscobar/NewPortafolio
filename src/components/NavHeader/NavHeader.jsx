import { Link, NavLink } from "react-router-dom";
import "./NavHeader.scss"
import { useRef } from "react";

const NavHeader = () => {

    const refCheckBTN = useRef(false);

    const handleCheck = () =>{
        refCheckBTN.current.checked = false;
    }


    return (
        <div className="ContentNav">
            <nav className="headerNav">
                <div className="contentLeft">
                    <img src="./perfilImg.jpg" alt="perfil imagen" className="perfilImagen" />
                    <h1 className="titulo">Hola Mundo!</h1>
                </div>

                <input type="checkbox" id="check" ref={refCheckBTN} />
                <label for="check" className="checkBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </label>

                <div className="contentRight">
                    <div className="boxLink">
                        <NavLink className="linkTxt" onClick={handleCheck} to="/" >Home</NavLink>
                    </div>
                    <div className="boxLink">
                        <Link className="linkTxt" onClick={handleCheck} to="/Proyectos" >Proyectos</Link>
                    </div>
                    <div className="boxLink">
                        <NavLink className="linkTxt" onClick={handleCheck} to="/Tools" >Tools</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavHeader