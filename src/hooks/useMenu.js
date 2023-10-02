import { useState, useEffect } from "react";

export const useMenu = () => {
  const [viewport, setViewport] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => setShowMenu(!showMenu)
  
  useEffect(() => {
    const handleWindowResize = () => {
      const newViewport = window.innerWidth;
      
      setViewport(newViewport);
      newViewport >= 640 && setShowMenu(false)
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [])

  return { showMenu, toggleMenu }
}