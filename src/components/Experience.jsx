import { useState } from 'react'
import { ExperiencieItem } from './ExperiencieItem.jsx'

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
  function OnClick (i) {
    const newOn = on.map((_, il) => il === i)
    setOn(newOn)
    console.log(newOn)
  }
  return (
    <section class='relative   flex gap-3'>
      <div class='min-w-28 bg-[#3E5155] flex flex-col items-center justify-between gap-8 p-4 ' id=' conteiner'>
        {on.map((o, i) => (
          o
            ? <div
                class=' min-w-20 min-h-20 relative shadowOnEXP bg-black/15'
                id={`${i}`}
                onClick={() => OnClick(i)}
                key={i}
              >

              <div className='flecha ' />
              <div className='punta' />
              </div>
            : <div
                class=' min-w-20 min-h-20 relative shadowEXP '
                id={`${i}`}
                onClick={() => OnClick(i)}
                key={i}
              />
        ))}
      </div>
      <div class='bg-[#3E5155] p-4'>
        {
          EXPERIENCIE.map((experiencie, i) => (
            on[i]
              ? (
                <li
                  class=''
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
