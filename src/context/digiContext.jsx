import { createContext, useContext, useState } from 'react'

const DataContext = createContext(null)

export function useData () {
  return useContext(DataContext)
}

export function Provider (props) {
  const [single, setSingle] = useState(null)
  const [all, setAll] = useState(null)

  return (
    <DataContext.Provider
      value={{
        setAll,
        all,
        setSingle,
        single
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}