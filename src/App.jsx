import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import './App.css'
import Listas from './componentes/listas'
import Favoritos from './componentes/favoritos'
import Aleatorio from './componentes/aleatorios'
import Capturado from './componentes/capturados'  
import Usuarios from './componentes/usuarios'
import Pokemon from './componentes/pokemon'
import Aleatorios from './componentes/aleatorios';
import Capturados from './componentes/capturados';


function App() {


  return (
    <router>
      <Routes>
      <router path= "/" element={<Listas/>}/>
      <router path= "/Favoritos" element={<Favoritos/>}/>
      <router path= "/Aleatorios" element={<Aleatorios/>}/>
      <router path= "/Capturados" element={<Capturados/>}/>
      <router path= "/Usuarios" element={<Usuarios/>}/>
      <router path= "/Pokemon" element={<Pokemon/>}/>
      </Routes>
    </router>
  )
}

export default App
