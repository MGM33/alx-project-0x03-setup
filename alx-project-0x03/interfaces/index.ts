// Button component interfaces
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

// Layout component interfaces
export interface LayoutProps {
  children: React.ReactNode;
}

// Page routing interfaces
export interface PageRouteProps {
  pageRoute: string
}