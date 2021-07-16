import React, { createContext, useState, useEffect, useContext } from "react"

export const MenuContext = createContext()

export function MenuProvider({
  children,
}) {
  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const url = "/api/items"

  useEffect(() => {
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
  }, [])

  return (
    <MenuContext.Provider value={{ result, isLoading }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider

export function useMenuApi() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}

