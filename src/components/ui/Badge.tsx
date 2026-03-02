import { cn } from '../../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium',
        'border border-[rgba(108,99,255,0.3)] bg-[rgba(108,99,255,0.1)] text-[#6C63FF]',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
      {children}
    </span>
  )
}
