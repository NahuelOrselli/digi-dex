import { useState } from 'react'
import { useData } from '../../context/digiContext'
import digiviceFrame from '../../assets/digivice.png'
import '../Digivice/Digivice.css'
import useServices from '../../hooks/useServices'

export default function Digivice() {
    const [index, setIndex] = useState(0)
    const { getAll, resetSingle } = useServices()
    const { single, all } = useData()

    const handleClickStart = () => {
        if (single) resetSingle()
        if (!all){
            getAll()
        }
    }

    const handleClickNext = () => {
        if (single) resetSingle()
        if (all && all.length !== 0){
            if (index === all.length - 1) {
                setIndex(0)
            } else {
                setIndex(prevState => prevState +1)
            }   
        }  
    }
    const handleClickPrev = () => {
        if (single) resetSingle()
        if (all && all.length !== 0){
            if (index === 0){
                setIndex(all.length - 1)
            }else{
                setIndex(prevState => prevState - 1)
            }
        }
    }

  return (
    <>
        <div className="card">
            <img src={digiviceFrame} className='digiviceFrame' alt="React logo" />
            <div className='inside-card'>
                {
                single !== null && single.length === 1 && 
                <>
                    <h3>{single[0].name}</h3>
                    <img src={single[0].img} alt={single.name} />
                    <p>{single[0].level}</p>
                </>
                }
                {
                single === null && all !== null && 
                <>
                    <h3>{all[index].name}</h3>
                    <img src={all[index].img} alt={all[index].name} />
                    <p>{all[index].level}</p>
                </>
                }
            </div>
            <button onClick={() => handleClickStart()} className='btn-start'></button>
            <button onClick={() => handleClickNext()} className='btn-next'></button>
            <button onClick={() => handleClickPrev()} className='btn-prev'></button>
        </div>
        
    </>
  )
}
