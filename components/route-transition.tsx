'use client'

interface RouteTransitionProps {
  children: React.ReactNode
}

export function RouteTransition({ children }: RouteTransitionProps) {
  // Overlay animation is now handled at the Shell level to cover entire viewport including navbar
  return <>{children}</>
}
