import { useNavigate } from 'react-router-dom'

export default function BackButton({ 
  to = null, 
  className = "btn btn-outline-secondary", 
  children = "← Back",
  onClick = null 
}) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else if (to) {
      navigate(to)
    } else {
      navigate(-1) // Go back one step in history
    }
  }

  return (
    <button 
      className={className} 
      onClick={handleClick}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '8px',
        transition: 'all 0.2s ease'
      }}
    >
      {children}
    </button>
  )
}
