import { useState } from 'react'
import { ExperiencieItem } from './ExperiencieItem.jsx'
import Arrow from '../icons/Arrow.astro'

const EXPERIENCIE = [
  {
    title: 'Desarrollador de software',
    company: 'Contab2 ',
    date: 'Marzo, 2024 ',
    actual: 'Actualmente ',
    description:
      'Me encuentro desarrollando un programa de facturación electrónica, estoy desarrollando este proyecto con mis experiencias anteriores los cuales fueron con lenguajes como JS, CSS, HTML, y Rust, además de mi experiencia de 2 años como auxiliar contable para poder usar la API de Sunat para la emisión de estos comprobantes. Este proyecto está siendo desarrollado con Tauri.',
    link: 'https://github.com/Ares101101/Contab2.git'
  },
  {
    title: 'Desarrollador de Software',
    company: 'CSI Servicios Integrales',
    date: 'Diciembre, 2023 ',
    description:
      'Tuve la responsabilidad de desarrollar programas para la mejora de la productividad en la empresa. Cuando llegué, la empresa digitaba a mano las boletas y facturas de sus proveedores en su sistema contable, además de generar manualmente sus memorandos y la boleta de planilla de sus clientes. Desarrollé un sistema MVC para la generación de boletas de planillas y memorandos, además de una aplicación .exe para la importación masiva de sus comprobantes.'
  },
  {
    title: 'Desarrollador Web',
    company: 'RVC Servicios Contables SA',
    date: 'Julio, 2023',
    description:
      'Desarrolle la página web de la empresa RVC Servicios contables usando Vite como copilador de código, en este proyecto use además la biblioteca de React, el framework de CSS Tailwind y la librería de React router dom, todo esto para tener un diseño acorde con los requisitos de la empresa.',
    link: 'https://rvc.vercel.app/'
  },
  {
    title: 'Desarrollo de Software ',
    company: 'RVC Servicios Contables SA',
    date: 'Enero, 2023',
    description:
      'Lideré el diseño y desarrollo de programas de software destinados a la automatización de procesos administrativos y contables en RVC Servicios Contables S.A. implementando soluciones que optimizaron la eficiencia operativa y redujeron la carga manual en tareas administrativas y contables.',
    link: 'https://github.com/Ares101101/Contab'
  }
]
export const Experience = () => {
  const [on, setOn] = useState([true, false, false, false])
  function OnClick(i) {
    const newOn = on.map((_, il) => il === i)
    setOn(newOn)
    console.log(newOn)
  }
  return (
    <section className='relative   flex gap-3'>
      <div className='min-w-28 bg-[#3E5155] flex flex-col items-center justify-between gap-8 p-4' id=' conteiner'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          preserveAspectRatio="none"
          viewBox="10 10 80 80"
          className='min-w-24 min-h-24 border-4 border-t-white/25 border-l-white/25 border-b-black/25 border-r-black/25 rotate-90'
        >
          <g>
            <rect x="10" y="10" width="80" height="80" fill="#bee3e5" />
            <path fill="#3E5155" stroke="none" d=" M 90 90 L 90 10 10 10 10 57.85 10 90 65.3 90 90 90 M 54.65 36.05 L 54.65 45.35 45.35 45.35 45.35 54.6 54.65 54.6 54.65 63.85 63.9 63.85 63.9 73.15 54.65 73.15 54.65 63.85 45.35 63.85 45.35 54.6 36.1 54.6 36.1 45.35 45.35 45.35 45.35 36.05 54.65 36.05 54.65 26.8 63.9 26.8 63.9 36.05 54.65 36.05 Z" />
          </g>
        </svg>
        {on.map((o, i) => (
          o
            ? <div
              className=' items-center justify-center flex  min-w-20 min-h-20 relative shadowOnEXP bg-black/15'
              id={`${i}`}
              onClick={() => OnClick(i)}
              key={i}
            >
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="64px"
              > <path d="M15 2h2v2h4v8h-2v-2H5v10h6v2H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm8 6v2h-4v-2h4zm-4 6h-2v-4h2v4zm4 0h-4v2h6v2h2v-2h-2v-6h-2v4z" fill="currentColor" /> </svg>
              <div className='flecha ' />
              <div className='punta' />
              <div className='dar'></div>
            </div>
            : <div
              className=' min-w-[88px] min-h-[88px] relative shadowEXP border-4 border-transparent flex justify-center items-center'
              id={`${i}`}
              onClick={() => OnClick(i)}
              key={i}
            >
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="64px"
              > <path d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zm4 6V6H5v2h14zm0 2H5v10h14V10zm-3 2v2h-2v-2h2zm-4 4v-2h2v2h-2zm-2 0h2v2h-2v-2zm0 0H8v-2h2v2z" fill="currentColor" /> </svg>
            </div>
        ))}
      </div>
      <div className='bg-[#3E5155] p-4'>
        {
          EXPERIENCIE.map((experiencie, i) => (
            on[i]
              ? (
                <li
                  className=''
                  key={i}
                >
                  <ExperiencieItem
                    {...experiencie}
                  />
                </li>
              )
              : ''
          ))
        }
      </div>
    </section>
  )
}
