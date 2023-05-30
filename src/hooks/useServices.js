import serviceAllDigimon from "../services/serviceAllDigimon"
import serviceSingleDigimon from "../services/serviceSingleDigimon"
import { useData } from "../context/digiContext"

export default function useServices() {

    const { setAll, setSingle } = useData()

    const getAll = () => {
        serviceAllDigimon()
        .then(res => setAll(res))
        .catch(err => console.error(err))
    }

    const getSingle = (name) => {
        serviceSingleDigimon(name)
        .then(res => setSingle(res))
        .catch(err => console.error(err))
    }

    const resetSingle = () => {
        setSingle(null)
    }


    return {
        getSingle,
        getAll,
        resetSingle
    }
}