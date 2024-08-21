export default {
    root: ({ state }) => ({
        class: [
            // Shape
            'rounded-3xl',
            'shadow-dialog',
            'border-0',

            // Size
            'm-0',

            // Color
            'bg-white',
            '[&:last-child]:border-b',
            'border-gray-200',

            // Transitions
            'transform',
            'scale-100',

            // Maximized State
            {
                'transition-none': state.maximized,
                'transform-none': state.maximized,
                '!w-screen': state.maximized,
                '!h-screen': state.maximized,
                '!max-h-full': state.maximized,
                '!top-0': state.maximized,
                '!left-0': state.maximized
            }
        ]
    }),
    header: {
        class: [
            // Flexbox and Alignment
            'flex items-center justify-between',
            'shrink-0',

            // Spacing
            'py-5 px-4 md:p-7',

            // Shape
            'rounded-tl-3xl',
            'rounded-tr-3xl',

            // Colors
            'border border-b-0',
            'border-gray-200'
        ]
    },
    title: {
        class: ['font-semibold md:text-lg text-gray-950']
    },
    icons: {
        class: ['flex items-center']
    },
    closeButton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'flex items-center justify-center',

            // Size and Spacing
            'mr-2',
            'last:mr-0',
            'w-7 h-7',

            // Shape
            'border-0',
            'rounded-full',

            // Colors
            'text-gray-500',
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:text-gray-400',
            'focus:outline-none focus:outline-offset-0 focus:ring-0',
            'focus:ring-transparent',

            // Misc
            'overflow-hidden'
        ]
    },
    maximizablebutton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'flex items-center justify-center',

            // Size and Spacing
            'mr-2',
            'last:mr-0',
            'w-7 h-7',

            // Shape
            'border-0',
            'rounded-full',

            // Colors
            'text-surface-500',
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:text-gray-600',
            'focus:outline-none focus:outline-offset-0 focus:ring-0',
            'focus:ring-primary-25',

            // Misc
            'overflow-hidden'
        ]
    },
    closeButtonIcon: {
        class: [
            // Display
            'inline-block',

            // Size
            'w-4',
            'h-4'
        ]
    },
    maximizableicon: {
        class: [
            // Display
            'inline-block',

            // Size
            'w-4',
            'h-4'
        ]
    },
    content: ({ state, instance }) => ({
        class: [
            // Spacing
            'px-4 md:px-7',
            'py-5 md:pb-7',
            'pt-0',

            // Shape
            {
                grow: state.maximized,
                'rounded-bl-3xl': !instance.$slots.footer,
                'rounded-br-3xl': !instance.$slots.footer
            },

            // Colors
            'text-surface-700 dark:text-surface-0/80',
            'border border-t-0 border-b-0',
            'border-gray-200',

            // Misc
            'overflow-y-auto',
        ]
    }),
    footer: {
        class: [
            // Flexbox and Alignment
            'flex items-center justify-end',
            'shrink-0',
            'text-right',
            'gap-2',

            // Spacing
            'px-6',
            'pb-6',

            // Shape
            'border-t-0',
            'rounded-b-3xl',

            // Colors
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80',
            'border border-t-0 border-b-0',
            'border-gray-200'
        ]
    },
    mask: ({ props }) => ({
        class: [
            // Transitions
            'transition-all',
            'duration-300',
            { 'p-5': !props.position == 'full' },

            // Background and Effects
            { 'has-[.mask-active]:bg-transparent bg-gray-500/40': props.modal }
        ]
    }),
    transition: ({ props }) => {
        return props.position === 'top'
            ? {
                  enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0 mask-active'
              }
            : props.position === 'bottom'
            ? {
                  enterFromClass: 'opacity-0 scale-75 translate-y-full mask-active',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0 mask-active'
              }
            : props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft'
            ? {
                  enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0 mask-active',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0 mask-active'
              }
            : props.position === 'right' || props.position === 'topright' || props.position === 'bottomright'
            ? {
                  enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0 mask-active'
              }
            : {
                  enterFromClass: 'opacity-0 scale-75 mask-active',
                  enterActiveClass: 'transition-all duration-200 ease-out',
                  leaveActiveClass: 'transition-all duration-200 ease-out',
                  leaveToClass: 'opacity-0 scale-75 mask-active'
              };
    }
};
