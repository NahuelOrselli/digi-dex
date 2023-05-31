import { useEffect, useRef } from 'react'
import '../Help/Help.css'
const arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFd0lEQVR4nO2afUyVVRzHD2AQiLxVExaFNGySUeOP3FqxxpgNnbnhaLNJa7QRlo0B02yCg6G9IcZybZgZy7UVvqzcWrJso+YqhaCFKVa82NrSILWaqJnip/0uF/fcwyNcHq8P57r72c5f9+45v9935+X3cpQKESJEiBD+A0QBi4FK4HXvaALeBGqAcqAYWArcJ/9XNwPALV4n/2ZqXAZ+BLYBzwCzVbABxAFfEBhGgK+BCiBJBQPAJm4M570r435lKkCK19Cr9PX1sWXLFtatW8fatWtZuXIllZWV1NbW0tjYSHNzM/v37+f48eOMjIz4uyreNXJ7MHqYXeXo0aPMnDkT+cmfERcXx8KFC6mpqaGjo4MrV65MJMQ/QBkQpkwBeM5qYUNDg9/O243U1FTWrFnDwMDAREJ8DMQrEwCetlp28OBBIiIirksEGfKNgoICjhw5ci0R+oD5Jghwm/cqu0pbWxsVFRWUlJSwaNEi0tPTHQsxY8YMVq1axZkzZ+xEGAIeMEGEPUxCf3+/Z58nJyc7EiItLY1Dhw7ZffpPIHO6BYgHevCDs2fPem4GJ9skMjKSpiYJKsfx07SfCUAq8BEw4TE+hlyDSUlJjlbDpk22YcdeZQLAg8CzQC3wDvClHieM0dXV5bkGnYiwfft2u08+pUwEiAVe9B5aPuzbt4+wsLApCxAVFWV3JvwBJCpTAe4AvtKtllPeySrIyMjg/Plxi+tVZTJANPCN1WK54hITEx2JUFVVZRctmp1EAXcBf1mt3rBhgyMBoqOjOXnypC5ClTId4CWrxYODg55rzokIq1ev1gXoNSpfsAOIkdVvtXrZsmWOBEhISODChQu6CI8o0wHeslq8Y8cORwLIaGlp0QVoUKYD5FgtHhoacnQlypDVo9GtTAeI0A/DuXPnOt4Gly5dsn5KItJkZTrA51ari4qKHG8Dm8BosTIRIBF4DHgS+NRq8caNGx0LYJMove+dQ0auBGImOL4NGHdkj7Fz507HAkjtcRIuAh9MS22R0Wzx58kslIqSUwHy8vLwk1/luHHT+TCg1R/LpKLsVIDMzEymQJc0c9wS4FF99p6eHnbt2jVuSMncqQCzZs2y/aaM7u5uOxHy3BLgDeusra2tnlqfU0edDIkvbIKlRrcEaLbOumLFCledHxtLl/q0MITP3BLgbeusmzdvnhYBqqurdQHec0uA5dZZJWLLyclx1fmsrCzOnTunC/C8WwJEAr9YZ5YcPiUlxRXnY2NjOXbsmO78CclIXRFAAPK9TU6fBkogukiTjd27d2NEARV4Rbeirq7uhjpfXi4PUsbR5LrzAhAuLQGrJdIez8/PvyHOL1iwgIsXJfr14QepS6rpApgN/G616PTp08yZMyegzkvTRd4faEjqfc+0OT+GNxP0Sd7b29sd1wT1ER4e7gm2NKQ+UKBMAXhZt1BejwRCgPXr19vt+3plEowmSJ/oVhYWFl6X87m5uVy+7NOtF751LfFxUB8Y0LvH8+bNc+S8tN5PnJDr3YdB4E5lKsBDwL9Wiw8fPkxMTMyUnJfk6sCBA7rzEnc8rkwHeEG3XLq/UxGgvr7ebt9Xq2AB+FC3vri42C/nlyxZYve6TK6BcBUsMNpC9wnYpduTnZ096dOZU6dO6c7/Btyugg1gPjBs9aS3t5f4+PhrvhHo7OzUnf8PeFgFK2jP7gQpadkJsHXrVrt9X66CHUaf1vhQVlbm4/zy5T4lhjH2Gt8V9gfgVuB7q2eS1JSWlnrueimpDQ/77BS89QYzXo8GAiBN8iT8Qxot2epmA3jCe6hNhMS9RepmhdHX6PIa1I5hY5/GBRLgbuA1oNMb238nDyCAewM6UYgQIUKECKGs/A9HXJ2YgfivLgAAAABJRU5ErkJggg=="

export default function Help() {
    const helpRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            helpRef.current.className = "hidden"
        },4400)
    },[])
  return (
    <>
        <div ref={helpRef} className="Help">
            <div className="Help-start"><h1>Start</h1><img className='arrow-start' src={arrow}/></div>
            <div className="Help-next"><img className='arrow-next' src={arrow}/><h1>Next</h1></div>
            <div className="Help-prev"><img className='arrow-prev' src={arrow}/><h1>Prev</h1></div>
        </div>
    </>
  )
}
