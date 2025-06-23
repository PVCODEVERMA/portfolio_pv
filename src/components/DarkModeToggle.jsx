import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if we're running in the browser
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('theme')
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      return savedMode ? savedMode === 'dark' : systemPrefersDark
    }
    return false
  })

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors duration-200"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? (
        <FaSun className="w-5 h-5" />
      ) : (
        <FaMoon className="w-5 h-5" />
      )}
    </button>
  )
}

export default DarkModeToggle