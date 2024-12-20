declare module 'react-scroll' {
    import * as React from 'react'
  
    interface LinkProps {
      to: string
      spy?: boolean
      smooth?: boolean
      offset?: number
      duration?: number
      className?: string
      children?: React.ReactNode
    }
  
    export const Link: React.FC<LinkProps>
  }
  
  