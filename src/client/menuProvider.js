import React, { createContext, useState, useEffect, useContext } from "react"

export const MenuContext = createContext()

export function MenuProvider({
  query,
  children,
}) {
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const url = query ? `/api/items?name=${query}` : "/api/items";

  useEffect(() => {
    setIsLoading(true)
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log('Success:', data)
        setResult(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }, [query])

  return (
    <MenuContext.Provider value={{ result, isLoading }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider

