import type { PrimitiveProps } from 'reka-ui'

import { tv, type VariantProps } from 'tailwind-variants/lite'

export const fieldVariants = tv({
  base: 'group/field flex w-full gap-x-2.5 gap-y-2',
  variants: {
    orientation: {
      vartical: 'flex-col *:w-full',
      horizontal:
        'flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto',
      responsive: [
        'flex-col *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:*:w-auto [&>.sr-only]:w-auto',
        '@md/field-group:*:data-[slot=field-label]:flex-auto',
        '@md/field-group:has-[>[data-slot=field-content]]:items-start',
      ],
    },
  },
  defaultVariants: {
    orientation: 'vartical',
  },
})

export type FieldVariants = VariantProps<typeof fieldVariants>

export interface FieldProps extends PrimitiveProps {
  class?: any
  orientation?: FieldVariants['orientation']
}
