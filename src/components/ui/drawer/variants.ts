import type { DialogContentProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'

import { tv, type VariantProps } from 'tailwind-variants'

export const drawerContentVariants = tv({
  base: 'fixed z-50 flex flex-col rounded-t-4xl border-border bg-surface/85 backdrop-blur-sm data-[state=closed]:duration-300 data-[state=open]:duration-500',
  variants: {
    side: {
      top: 'inset-x-0 top-0 max-h-3/4 border-b data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:animate-in data-[state=open]:slide-in-from-top',
      right:
        'inset-y-0 right-0 w-3/4 border-l data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right sm:max-w-sm',
      bottom:
        'inset-x-0 bottom-0 max-h-3/4 border-t data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom',
      left: 'inset-y-0 left-0 w-3/4 border-r data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:animate-in data-[state=open]:slide-in-from-left sm:max-w-sm',
    },
  },
  defaultVariants: {
    side: 'right',
  },
})

export type DrawerContentVariants = VariantProps<typeof drawerContentVariants>

export interface DrawerContentProps extends DialogContentProps {
  class?: HTMLAttributes['class']
  side?: DrawerContentVariants['side']
}
