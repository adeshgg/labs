import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

export const ViewButtonVariants = cva(
  'flex items-end gap-2 rounded-full px-4 py-2 text-2xl cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-zinc-200 text-neutral-500',
        selected: 'bg-sky-500 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface ViewButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ViewButtonVariants> {
  icon: React.ReactNode
  label: string
  variant?: 'default' | 'selected'
}

const ViewButton = React.forwardRef<HTMLButtonElement, ViewButtonProps>(
  ({ icon, label, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ViewButtonVariants({ variant }))}
        {...props}
      >
        <span className="self-center">{icon}</span>
        <span className="hidden md:block">{label}</span>
      </button>
    )
  }
)

export default ViewButton
