import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { useNavigate } from 'react-router-dom'

export default function LogoutButton({ 
  className = "btn btn-outline-danger", 
  children = "Logout",
  showConfirmation = true,
  redirectTo = "/"
}) {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    if (showConfirmation) {
      const confirmed = window.confirm('Are you sure you want to logout?')
      if (!confirmed) return
    }

    setIsLoggingOut(true)
    try {
      await logout()
      navigate(redirectTo)
    } catch (error) {
      console.error('Logout error:', error)
      // Still redirect even if logout fails
      navigate(redirectTo)
    } finally {
      setIsLoggingOut(false)
    }
  }

  return (
    <button 
      className={className} 
      onClick={handleLogout}
      disabled={isLoggingOut}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '8px',
        transition: 'all 0.2s ease'
      }}
    >
      {isLoggingOut ? (
        <>
          <i className="fas fa-spinner fa-spin"></i>
          Logging out...
        </>
      ) : (
        <>
          <i className="fas fa-sign-out-alt"></i>
          {children}
        </>
      )}
    </button>
  )
}
