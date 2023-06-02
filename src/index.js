import "./style.css";
import ReactDOM from "react-dom/client";
import React from "react";
import {
  RouterProvider,
} from "react-router-dom";

import {router} from "./router/index.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

window.addEventListener('resize', () => {
  root.configure({ 
    size: { width: window.innerWidth, height: window.innerHeight }
  })
})

root.render(
  <>

    <React.StrictMode>
      {/* Router principal para diferencias las referencias*/}
      <RouterProvider router={router} />
    </React.StrictMode>

  </>
);
