import React, { createContext, useState, useEffect } from "react"

export const SelectedMenuContext = createContext()

export function SelectedMenuProvider({
  children,
}) {
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const url = "/api/selectedItems";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log('Selected items fetch success:', data)
        setResult(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }, [])

  return (
    <SelectedMenuContext.Provider value={{ result, isLoading }}>
      {children}
    </SelectedMenuContext.Provider>
  )
}

export default SelectedMenuProvider
