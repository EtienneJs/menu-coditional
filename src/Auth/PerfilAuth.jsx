import { Children, useState } from 'react'
import { Outlet } from 'react-router-dom';

function PerfilAuth({permisos}) {
  if(!permisos){
    return 'Opp no tienes permisos para entrar aqui';
  }

  return (
    <>
      <Outlet/>
    </>
  )
}

export default PerfilAuth
