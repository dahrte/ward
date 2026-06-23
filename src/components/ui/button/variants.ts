import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { tv, type VariantProps } from 'tailwind-variants/lite'

export const buttonVariants = tv({
  base: [
    'relative inline-flex shrink-0 items-center justify-center rounded-[10px] border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none',
    'disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  ],
  variants: {
    variant: {
      primary: [
        'bg-primary text-primary-content! hover:brightness-90',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20 dark:focus-visible:ring-ring/40',
      ],
      secondary: [
        'border-control/70 text-content hover:bg-muted hover:text-content dark:bg-control/30 dark:hover:brightness-120',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20',
      ],
      soft: [
        'bg-interactive text-content hover:brightness-90',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20',
      ],
      ghost: [
        'border-transparent text-content hover:bg-interactive hover:text-content',
        'focus-visible:border-ring/50 focus-visible:ring-3 focus-visible:ring-ring/20',
      ],
      destructive: [
        'bg-destructive text-white hover:brightness-90',
        'focus-visible:border-destructive/50 focus-visible:ring-3 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
      ],
    },
    size: {
      '2xs': 'h-6 gap-1 px-1.5 py-1 text-xs/4',
      xs: 'h-7 gap-1 px-2 py-1 text-sm/5',
      sm: 'h-8 gap-1 p-1.5 px-2.5 text-sm/5',
      md: 'h-9 gap-2 px-3 py-2 text-sm/5',
      lg: 'h-10 gap-2 px-3.5 py-2.5 text-sm/5',
    },
    icon: {
      true: 'p-0',
      false: '',
    },
  },
  compoundVariants: [
    {
      icon: true,
      size: '2xs',
      class: 'size-6',
    },
    {
      icon: true,
      size: 'xs',
      class: 'size-7',
    },
    {
      icon: true,
      size: 'sm',
      class: 'size-8',
    },
    {
      icon: true,
      size: 'md',
      class: 'size-9',
    },
    {
      icon: true,
      size: 'lg',
      class: 'size-10',
    },
  ],
  defaultVariants: {
    size: 'md',
    icon: false,
    variant: 'primary',
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

export interface ButtonProps extends PrimitiveProps {
  icon?: boolean
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  variant?: ButtonVariants['variant']
}
