import { tv } from 'tailwind-variants'

export const ButtonTheme = tv({
  base: 'outline-none outline-offset-4 select-none whitespace-nowrap text-ellipsis overflow-hidden relative border border-solid border-transparent',
  variants: {
    color: {
      success:
        'text-white bg-success-7 shadow enabled:hover:bg-success-8 enabled:active:bg-success-9 focus-visible:bg-success-9 focus-visible:outline-success-9',
      warning:
        'text-white bg-warning-7 shadow enabled:hover:bg-warning-8 enabled:active:bg-warning-9 focus-visible:bg-warning-9 focus-visible:outline-warning-9',
      error:
        'text-white bg-error-6 shadow enabled:hover:bg-error-7 enabled:active:bg-error-8 focus-visible:bg-error-8 focus-visible:outline-error-8',
      primary:
        'text-white bg-primary-8 shadow enabled:hover:bg-primary-7 enabled:active:bg-primary-8 focus-visible:bg-primary-8 focus-visible:outline-primary-8',
      default:
        'text-black-8 border-gray-3 enabled:hover:bg-gray-1 enabled:active:bg-gray-2 focus-visible:bg-gray-2 focus-visible:outline-gray-3'
    },
    plain: {
      success:
        'border-success-6 bg-white text-success-6 enabled:hover:bg-gray-1 enabled:active:bg-gray-2 focus-visible:bg-gray-2',
      warning:
        'border-warning-6 bg-white text-warning-6 enabled:hover:bg-gray-1 enabled:active:bg-gray-2 focus-visible:bg-gray-2',
      error:
        'border-error-6 bg-white text-error-6 enabled:hover:bg-gray-1 enabled:active:bg-gray-2 focus-visible:bg-gray-2',
      primary:
        'border-primary-6 bg-white text-primary-6 enabled:hover:bg-gray-1 enabled:active:bg-gray-2 focus-visible:bg-gray-2',
      default: ''
    },
    size: {
      xs: 'text-xs px-2 py-1',
      sm: 'text-sm px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-5 py-2.5',
      xl: 'text-base px-6 py-3'
    },
    disabled: {
      true: 'cursor-not-allowed opacity-90'
    },
    fullSized: {
      true: 'w-full'
    },
    rounded: {
      false: 'rounded-lg',
      true: 'rounded-full'
    }
  }
})
