import { useState, useEffect } from 'react'

export const useWindow = () => {
  const [windowSize, setWindowSize] = useState({ width: null, height: null })

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isTablet: window.innerWidth < 960,
        isMobile: window.innerWidth < 648,
      })

    window.addEventListener('resize', handleResize)
    handleResize() // Set initial window size

    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect only runs on mount and unmount

  return windowSize
}
