export default {
    root: ({ props, state, parent }) => ({
        class: [
            // Font
            'leading-none',

            // Display and Position
            'inline-flex',
            'relative',
            'items-center',

            // Shape
            'rounded-lg',

            // Color and Background
            { 'bg-surface-0': !props.disabled },
            'border',
            { 'border-surface-300': !props.invalid },

            // Invalid State
            'invalid:focus:ring-red-200',
            'invalid:hover:border-red-500',
            { 'border-red-500': props.invalid },

            // Transitions
            'transition-all',
            'duration-200',

            // States
            { 'hover:border-surface-400': !props.invalid },
            { 'outline-none outline-offset-0 z-10 ring-1 ring-primary-500': state.focused },

            // Misc
            'cursor-pointer',
            'select-none',
            { 'bg-surface-200 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    labelContainer: {
        class: 'overflow-hidden flex flex-auto cursor-pointer '
    },
    label: ({ props }) => ({
        class: [
            'leading-none',
            'block',

            // Spacing
            {
                'py-3 px-1': props.display === 'comma' || (props.display === 'chip' && !props?.modelValue?.length),
                'py-1 px-1': props.display === 'chip' && props?.modelValue?.length > 0
            },

            // Color
            { 'text-surface-800': props.modelValue?.length, 'text-surface-400': !props.modelValue?.length },
            'placeholder:text-surface-400',

            // Transitions
            'transition duration-200',

            // Misc
            'overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis'
        ]
    }),
    token: {
        class: [
            // Flex
            'inline-flex items-center',

            // Spacings
            'py-1 px-3 m-0 mr-1',

            // Shape
            'rounded',

            // Colors
            'bg-surface-100',
            'text-surface-700',

            // Misc
            'cursor-default'
        ]
    },
    removeTokenIcon: {
        class: [
            // Spacing
            'ml-[0.375rem]',

            // Size
            'w-4 h-4',

            // Misc
            'cursor-pointer'
        ]
    },
    trigger: {
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',

            // Color and Background
            'bg-transparent',
            'text-surface-500',

            // Size
            'w-10',

            // Shape
            'rounded-r-md'
        ]
    },
    panel: {
        class: [
            // Colors
            'bg-surface-0',
            'text-surface-700',

            // Shape
            'border border-surface-300',
            'rounded-md',
            'shadow-md'
        ]
    },
    header: {
        class: [
            //Flex
            // 'flex items-center justify-between',
            'flex items-center',

            // Spacing
            'py-3 px-4',
            'm-0',

            //Shape
            'border-b',
            'rounded-tl-md',
            'rounded-tr-md',

            // Color
            'text-surface-700',
            'bg-surface-0',
            'border-gray-200'
        ]
    },
    headerCheckboxContainer: {
        class: [
            'relative',

            // Alignment
            'inline-flex',
            'align-bottom',

            // Size
            'w-5',
            'h-5',

            // Spacing
            'mr-2',

            // Misc
            'cursor-pointer',
            'select-none'
        ]
    },
    headerCheckbox: {
        root: {
            class: [
                'relative',

                // Alignment
                'inline-flex',
                'align-bottom',

                // Size
                'w-5',
                'h-5',

                // Spacing
                'mr-2',

                // Misc
                'cursor-pointer',
                'select-none'
            ]
        },
        box: ({ props, context }) => ({
            class: [
                // Alignment
                'flex',
                'items-center',
                'justify-center',

                // Size
                'w-5',
                'h-5',

                // Shape
                'rounded-full',
                'border',

                // Colors
                {
                    'border-surface-300': !context.checked && !props.invalid,
                    'bg-surface-0': !context.checked && !props.invalid && !props.disabled,
                    'border-primary bg-primary': context.checked
                },

                // Invalid State
                'invalid:focus:ring-red-200',
                'invalid:hover:border-red-500',
                { 'border-red-500': props.invalid },

                // States
                {
                    'peer-hover:border-surface-400': !props.disabled && !context.checked && !props.invalid,
                    'peer-hover:bg-primary-hover peer-hover:border-primary-hover': !props.disabled && context.checked,
                    'peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500': !props.disabled,
                    'bg-surface-200 select-none pointer-events-none cursor-default': props.disabled
                },

                // Transitions
                'transition-colors',
                'duration-200'
            ]
        }),
        input: {
            class: [
                'peer',

                // Size
                'w-full ',
                'h-full',

                // Position
                'absolute',
                'top-0 left-0',
                'z-10',

                // Spacing
                'p-0',
                'm-0',

                // Shape
                'opacity-0',
                'rounded',
                'outline-none',
                'border border-surface-300',

                // Misc
                'appearance-none',
                'cursor-pointer'
            ]
        },
        icon: {
            class: [
                // Size
                'w-[0.875rem]',
                'h-[0.875rem]',

                // Colors
                'text-white',

                // Transitions
                'transition-all',
                'duration-200'
            ]
        }
    },
    itemCheckbox: {
        root: {
            class: [
                'relative',

                // Alignment
                'inline-flex',
                'align-bottom',

                // Size
                'w-5',
                'h-5',

                // Spacing
                'mr-2',

                // Misc
                'cursor-pointer',
                'select-none'
            ]
        },
        box: ({ props, context }) => ({
            class: [
                // Alignment
                'flex',
                'items-center',
                'justify-center',

                // Size
                'w-5',
                'h-5',

                // Shape
                'rounded-full',
                'border',

                // Colors
                {
                    'border-surface-300': !context.checked && !props.invalid,
                    'bg-surface-0 ': !context.checked && !props.invalid && !props.disabled,
                    'border-primary bg-primary': context.checked
                },

                // Invalid State
                'invalid:focus:ring-red-200',
                'invalid:hover:border-red-500',
                { 'border-red-500': props.invalid },

                // States
                {
                    'peer-hover:border-surface-400': !props.disabled && !context.checked && !props.invalid,
                    'peer-hover:bg-primary-hover peer-hover:border-primary-hover': !props.disabled && context.checked,
                    'peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500': !props.disabled,
                    'bg-surface-200 select-none pointer-events-none cursor-default': props.disabled
                },

                // Transitions
                'transition-colors',
                'duration-200'
            ]
        }),
        input: {
            class: [
                'peer',

                // Size
                'w-full ',
                'h-full',

                // Position
                'absolute',
                'top-0 left-0',
                'z-10',

                // Spacing
                'p-0',
                'm-0',

                // Shape
                'opacity-0',
                'rounded',
                'outline-none',
                'border border-surface-300',

                // Misc
                'appearance-none',
                'cursor-pointer'
            ]
        },
        icon: {
            class: [
                // Size
                'w-[0.875rem]',
                'h-[0.875rem]',

                // Colors
                'text-white',

                // Transitions
                'transition-all',
                'duration-200'
            ]
        }
    },
    closeButton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'flex items-center justify-center',

            // Size and Spacing
            'ml-2',
            'last:mr-0',
            'w-8 h-8',

            // Shape
            'border-0',
            'rounded-full',

            // Colors
            'text-surface-500',
            'bg-transparent',

            // Transitions
            'transition duration-200 ease-in-out',

            // States
            'hover:text-surface-700',
            'hover:bg-surface-100',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset',
            'focus:ring-primary-500',

            // Misc
            'overflow-hidden',
            'hidden'
        ]
    },
    closeButtonIcon: {
        class: 'w-4 h-4 inline-block hidden',
    },
    wrapper: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
            'overflow-auto'
        ]
    },
    list: {
        class: 'p-1 list-none m-0'
    },
    item: ({ context }) => ({
        class: [
            'relative',

            // Font
            'leading-none',

            // Spacing
            'm-0 px-3 py-2',
            'first:mt-0 mt-[2px]',

            // Shape
            'border-0 rounded',

            // Colors
            {
                'text-surface-700': !context.focused && !context.selected,
                'bg-surface-200': context.focused && !context.selected,
                'text-surface-700': context.focused && !context.selected,

                'text-primary-highlight-inverse': context.selected,
                // 'bg-primary-highlight': context.selected
            },

            //States
            { 'hover:bg-surface-100': !context.focused && !context.selected },
            { 'hover:bg-primary-highlight-hover': context.selected },
            // { 'hover:text-surface-700 hover:bg-surface-100': context.focused && !context.selected },

            // Transition
            'transition-shadow duration-200',

            // Misc
            'cursor-pointer overflow-hidden whitespace-nowrap'
        ]
    }),
    itemgroup: {
        class: [
            'font-semibold',

            // Spacing
            'm-0 py-3 px-4',

            // Colors
            'text-surface-400',

            // Misc
            'cursor-auto'
        ]
    },
    filtercontainer: {
        class: 'relative'
    },
    filterinput: {
        class: [
            // Font
            'leading-[normal]',

            // Sizing
            'py-2 pl-3 pr-7',
            '-mr-7',
            'w-full',

            //Color
            'text-surface-700',
            'bg-surface-0',
            'border-surface-200',

            // Shape
            'border',
            'rounded-lg',
            'appearance-none',

            // Transitions
            'transition',
            'duration-200',

            // States
            'hover:border-surface-400',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',

            // Misc
            'appearance-none',
            'hidden',
        ]
    },
    filtericon: {
        class: ['absolute', 'top-1/2 right-3', '-mt-2']
    },
    clearicon: {
        class: [
            // Color
            'text-surface-400',

            // Position
            'absolute',
            'top-1/2',
            'right-12',

            // Spacing
            '-mt-2'
        ]
    },
    emptymessage: {
        class: [
            // Font
            'leading-none',

            // Spacing
            'py-3 px-4',

            // Color
            'text-surface-800',
            'bg-transparent'
        ]
    },
    loadingicon: {
        class: 'text-surface-400 animate-spin'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
