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
  }
  return (
    <section className='relative   flex gap-3'>
      <div className='min-w-28 bg-[#3E5155] flex flex-col items-center gap-5 p-4' id=' conteiner'>
        <div 
          className='relative sec cursor-pointer'
          onClick={()=>{
            if((on.indexOf(true) + 1) === 1){
              const newOn = on.map((_, i) => i === 3)
              setOn(newOn)
            }else{
              const newOn = on.map((_, i)=> i === (on.indexOf(true) - 1))
              setOn(newOn)
            }
          }}
        >
          <div className=' triangle ' >
            {<svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px"
              viewBox="0 0 256 256"
              enable-background="new 0 0 256 256"
              xml:space="preserve"
              className=' -rotate-90 w-full h-9 absolute -bottom-0 z-10 '
            >
              <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
              <g>
                <g>
                  <path fill="currentColor" d="M60.5,10h33.8v33.4H60.5V10z" />
                  <path fill="currentColor" d="M94.2,43.4H128v33.8H94.2V43.4L94.2,43.4z" />
                  <path fill="currentColor" d="M128,77.2h33.8v33.8H128V77.2z" />
                  <path fill="currentColor" d="M128,144.7h33.8v33.8H128V144.7L128,144.7z" />
                  <path fill="currentColor" d="M94.2,178.5H128v33.8H94.2V178.5L94.2,178.5z" />
                  <path fill="currentColor" d="M60.5,212.2h33.8V246H60.5V212.2z" />
                  <path fill="currentColor" d="M161.8,110.9h33.8v33.8h-33.8V110.9L161.8,110.9z" />
                </g>
              </g>
            </svg>}
          </div>
        </div>
        {on.map((o, i) => (
          o
            ? <div
              className=' items-center justify-center flex  min-w-20 min-h-20 relative shadowOnEXP bg-black/15 cursor-pointer m-1'
              id={`${i}`}
              onClick={() => OnClick(i)}
              key={i}
            >
              {<svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className='w-12'
              > <path d="M15 2h2v2h4v8h-2v-2H5v10h6v2H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm8 6v2h-4v-2h4zm-4 6h-2v-4h2v4zm4 0h-4v2h6v2h2v-2h-2v-6h-2v4z" fill="currentColor" /> </svg>}
              <div className='flecha ' />
              <div className='punta' />
              <div className='dar'></div>
            </div>
            : <div
              className=' min-w-[88px] min-h-[88px] relative shadowEXP border-4 border-transparent flex justify-center items-center cursor-pointer'
              id={`${i}`}
              onClick={() => OnClick(i)}
              key={i}
            >
              {<svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className='w-12'
              > <path d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zm4 6V6H5v2h14zm0 2H5v10h14V10zm-3 2v2h-2v-2h2zm-4 4v-2h2v2h-2zm-2 0h2v2h-2v-2zm0 0H8v-2h2v2z" fill="currentColor" /> </svg>}
            </div>
        ))}
        <div 
          className='relative secv rotate-180 cursor-pointer '
          onClick={()=>{
            if((on.indexOf(true) + 1) === 4){
              const newOn = on.map((_, i) => i === 0)
              setOn(newOn)
            }else{
              const newOn = on.map((_, i)=> i === (on.indexOf(true) + 1))
              setOn(newOn)
            }
          }}    
        >
          <div className=' triangle ' >
            {<svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px" y="0px"
              viewBox="0 0 256 256"
              enable-background="new 0 0 256 256"
              xml:space="preserve"
              className=' -rotate-90 w-full -bottom-0 z-10 h-9 absolute'
            >
              <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
              <g>
                <g>
                  <path fill="currentColor" d="M60.5,10h33.8v33.4H60.5V10z" />
                  <path fill="currentColor" d="M94.2,43.4H128v33.8H94.2V43.4L94.2,43.4z" />
                  <path fill="currentColor" d="M128,77.2h33.8v33.8H128V77.2z" />
                  <path fill="currentColor" d="M128,144.7h33.8v33.8H128V144.7L128,144.7z" />
                  <path fill="currentColor" d="M94.2,178.5H128v33.8H94.2V178.5L94.2,178.5z" />
                  <path fill="currentColor" d="M60.5,212.2h33.8V246H60.5V212.2z" />
                  <path fill="currentColor" d="M161.8,110.9h33.8v33.8h-33.8V110.9L161.8,110.9z" />
                </g>
              </g>
            </svg>}
          </div>
        </div>
        <div className='-m-1 w-24 min-h-24 border-4 border-t-black/25 border-l-black/25 border-b-white/25 border-r-white/25 bg-black/25 font-title text-5xl flex items-center justify-center'>
          <span className='ml-1'>{on.indexOf(true) + 1}</span>/
          {on.length}
        </div>
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
