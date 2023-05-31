import { useState, useRef } from 'react'
import useServices from '../../hooks/useServices'
import '../Header/Header.css'
const lupaImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAABM0lEQVR4nL3UPUtcURDG8etqoWKZTjsRK4OgqRIVQfAzaC0iqTaoraQV0omfQHzpfEF7BcFWLMQ+oiCoGJMYNPKTZUfYYvfeqy4+1TnMM/8zw5lzkuQ9hC58xzYOsI4iPrwU1IQfeFDWGY5wGfsbTOSFNWAtErfwsSJWwAgOIz6bBzgV5oUSvIanFbt4RH8arIBTHJfazji4HX+wmWb6FNUVM1sp+5dxh+ZahvEADuYEToe/q5ZhLAxDOYEz4e/OavlbTuAK/qEl7VJ+4iTHpXTgLzayTp2MKhczxmYP/9GXZ7BXA7qD3opYI0bj1Yix+ZIKrEicx30kngfkOvZX+B3rWwwkeYROzMXnsI8lfEVbabReBU0TPuNXRfvDyVtVpdLBekCfK71Az5uBAR2oG6yangConNlljcOZ+QAAAABJRU5ErkJggg=="

export default function Header() {

  const [data, setData] = useState()
  const inputRef = useRef()
  const { getSingle } = useServices()

  const handleChange = (evt) => {
      setData(evt.target.value)
    }
  
  const handleClick = () => {
      if (data){
        getSingle(data)
        inputRef.current.value = ''
        setData(null)
      }
    }
  
  const handleEnter = (evt) => {
    if ( evt.key === 'Enter'){
      if (data){
        getSingle(data)
        inputRef.current.value = ''
        setData(null)
      }
    }
  }
  
  return (
    <>
    <nav className='Header-nav'>
        <ul className='Header-ul'>
            <li className='Header-ul-li'>Search by name:&nbsp;<input ref={inputRef} type="text" onChange={(evt) => handleChange(evt)} onKeyDown={(evt) => handleEnter(evt)} /><button onClick={() => handleClick()}>&nbsp;<img src={lupaImg}/></button></li>
            <li className='Header-ul-li logo'>DIGI-DEX</li>
            <li className='Header-ul-li'>Colaborate in&nbsp;<a className='Header-ul-li-a' target='_blank' href="https://github.com/NahuelOrselli/digi-dex" rel="noreferrer">GitHub</a></li>
        </ul>
    </nav>
    </>
  )
}
