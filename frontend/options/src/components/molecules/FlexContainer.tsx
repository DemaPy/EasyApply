import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface Props {
  className?: string
  column?: boolean
}

export const FlexContainer = ({ children, className, column }: PropsWithChildren<Props>) => {
  return (
    <div className={cn('flex items-center justify-between', {['flex-col items-stretch']: column} ,className)}>
      {children}
    </div>
  )
}