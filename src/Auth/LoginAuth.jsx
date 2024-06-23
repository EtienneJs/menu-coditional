import { Children, useState } from 'react'
import { Outlet } from 'react-router-dom';

function LoginAuth({permisos}) {
  if(!permisos){
    return 'Opp no tienes permisos para entrar aqui';
  }

  return (
    <>
      <Outlet/>
    </>
  )
}

export default LoginAuth
