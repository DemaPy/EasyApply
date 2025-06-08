import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface Props {
  className?: string
}

export const Container = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div className={cn('p-3 gap-2 flex flex-col', className)}>
      {children}
    </div>
  )
}