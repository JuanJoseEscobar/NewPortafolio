import { useState } from "react";
import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {

      Datos: {},//Guarda la información del data.json referente al mueble

      Id:"",//Id ingresado por la url

      Cliente: '',//Actualización del cliente, dependiendo si es Maderkit o Practimac

      CargarDatos: (datos) => {
        set((state) => {
          return state.Datos= datos ;
        });
      },
      CargarId: (id) => {
        set((state) => {
          return {Id: id}
        });
      },
      ActualizarCliente: (cliente) => set((state) => ({ Cliente: cliente })),

    };
  })
);
