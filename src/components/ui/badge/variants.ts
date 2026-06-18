import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { tv, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
  base: 'inline-flex items-center justify-center border font-medium whitespace-nowrap [&_svg]:last:-mr-0.5 [&_svg:not([class*="size-"])]:size-3.5',
  variants: {
    size: {
      sm: 'gap-1.5 px-1.5 py-0.5 text-xs/4',
      lg: 'gap-1.5 px-2 py-1 text-xs/4',
    },
    color: {
      blue: 'bg-blue-200/80 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400',
      cyan: 'bg-cyan-200/80 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-400',
      fuchsia: 'bg-fuchsia-200/80 text-fuchsia-600 dark:bg-fuchsia-900/40 dark:text-fuchsia-400',
      green: 'bg-green-200/80 text-green-600 dark:bg-green-900/40 dark:text-green-400',
      lime: 'bg-lime-200/80 text-lime-600 dark:bg-lime-900/40 dark:text-lime-400',
      neutral: 'bg-neutral-200/80 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400',
      orange: 'bg-orange-200/80 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400',
      pink: 'bg-pink-200/80 text-pink-600 dark:bg-pink-900/40 dark:text-pink-400',
      red: 'bg-rose-200/80 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400',
      violet: 'bg-violet-200/80 text-violet-600 dark:bg-violet-900/40 dark:text-violet-400',
    },
    shape: {
      rounded: 'rounded-lg',
      pill: 'rounded-full',
    },
    variant: {
      filled: 'border-transparent',
      stroke: 'bg-transparent!',
    },
  },
  compoundVariants: [
    {
      variant: 'stroke',
      color: 'blue',
      class: 'border-blue-500/30',
    },
    {
      variant: 'stroke',
      color: 'cyan',
      class: 'border-cyan-500/30',
    },
    {
      variant: 'stroke',
      color: 'fuchsia',
      class: 'border-fuchsia-500/30',
    },
    {
      variant: 'stroke',
      color: 'green',
      class: 'border-green-500/30',
    },
    {
      variant: 'stroke',
      color: 'lime',
      class: 'border-lime-500/30',
    },
    {
      variant: 'stroke',
      color: 'neutral',
      class: 'border-neutral-500/30',
    },
    {
      variant: 'stroke',
      color: 'orange',
      class: 'border-orange-500/30',
    },
    {
      variant: 'stroke',
      color: 'pink',
      class: 'border-pink-500/30',
    },
    {
      variant: 'stroke',
      color: 'red',
      class: 'border-rose-500/30',
    },
    {
      variant: 'stroke',
      color: 'violet',
      class: 'border-violet-500/30',
    },
  ],
  defaultVariants: {
    size: 'sm',
    color: 'neutral',
    shape: 'rounded',
    variant: 'filled',
  },
})

export type BadgeVariants = VariantProps<typeof badgeVariants>

export interface BadgeProps extends PrimitiveProps {
  size?: BadgeVariants['size']
  color?: BadgeVariants['color']
  shape?: BadgeVariants['shape']
  class?: HTMLAttributes['class']
  variant?: BadgeVariants['variant']
}
