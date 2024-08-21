export default {
    root: {
        class: [
            // Flex & Alignment
            'flex items-center justify-center flex-wrap gap-1',

            // Spacing
            'px-4 py-3 mt-6',

            // Shape
            'border-0 rounded-md',

            // Color
            'bg-white',
            'text-gray-700',

            // Font
            'text-sm'
        ]
    },
    firstpagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'w-9 h-9',

            // Color
            'text-gray-700',

            // State
            {
                'hover:bg-gray-100': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500': !context.disabled
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none disabled:text-gray-400': context.disabled }
        ]
    }),
    previouspagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'w-9 h-9',

            // Color
            'text-gray-700',

            // State
            {
                'hover:bg-gray-100': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500': !context.disabled
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none disabled:text-gray-400': context.disabled }
        ]
    }),
    nextpagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'w-9 h-9',
            'leading-none',

            // Color
            'text-gray-700',

            // State
            {
                'hover:bg-gray-100': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500': !context.disabled
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none disabled:text-gray-400': context.disabled }
        ]
    }),
    lastpagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'w-9 h-9',
            'leading-none',

            // Color
            'text-gray-700',

            // State
            {
                'hover:bg-gray-100': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500': !context.disabled
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none disabled:text-gray-400': context.disabled }
        ]
    }),
    pagebutton: ({ context }) => ({
        class: [
            'relative',

            // Flex & Alignment
            'inline-flex items-center justify-center',

            // Shape
            'border-0 rounded-full',

            // Size
            'w-9 h-9',
            'leading-none',

            // Color
            'text-gray-700',

            // State
            {
                'hover:bg-gray-100': !context.disabled,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500': !context.disabled,
                'bg-primary-50 text-primary-500': context.active
            },

            // Transition
            'transition duration-200',

            // Misc
            'user-none overflow-hidden',
            { 'cursor-default pointer-events-none disabled:text-gray-400': context.disabled }
        ]
    }),
    rowperpagedropdown: {
        root: ({ props, state }) => ({
            class: [
                // Display and Position
                'inline-flex',
                'relative',

                // Shape
                'rounded-lg',

                // Spacing
                'mx-2',

                // Color and Background
                'bg-white',
                'border border-gray-300',

                // Transitions
                'transition-all',
                'duration-200',

                // States
                'hover:border-gray-500',
                { 'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500': !state.focused },

                // Misc
                'cursor-pointer',
                'shadow-input',
                'select-none',
                { 'bg-gray-50 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        input: {
            class: [
                // Display
                'block',
                'flex-auto',

                // Color and Background
                'bg-transparent',
                'border-0',
                'text-gray-400',

                // Sizing and Spacing
                'w-[1%]',
                'py-2 pl-4 pr-2',

                //Shape
                'rounded-none',

                // Transitions
                'transition',
                'duration-200',

                // States
                'focus:outline-none focus:shadow-none',

                // Misc
                'relative',
                'cursor-pointer',
                'overflow-hidden overflow-ellipsis',
                'whitespace-nowrap',
                'appearance-none'
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
                'rounded-tr-md',
                'rounded-br-md'
            ]
        },
        panel: {
            class: [
                // Colors
                'bg-gray-25',
                'text-gray-950',

                // Shape
                'border border-gray-200',
                'rounded-lg',
                'shadow-[0_8px_16px_-4px_rgba(12,17,29,0.08)]'
            ]
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
            class: 'list-none py-2'
        },
        item: ({ context }) => ({
            class: [
                'relative',

                // Font
                'text-sm',
                'text-center',

                // Spacing
                'm-0 p-3',

                // Shape
                'border-0',

                // Colors
                {
                    'text-gray-950': !context.focused && !context.selected,
                    'bg-primary-50': context.focused && !context.selected,
                    'text-primary-950': context.focused && !context.selected,

                    'text-primary-highlight-inverse': context.selected,
                    'bg-primary-highlight': context.selected
                },

                //States
                { 'hover:bg-primary-50': !context.focused && !context.selected },
                { 'hover:text-primary-500 hover:bg-primary-50': context.focused && !context.selected },

                // Transitions
                'transition-shadow',
                'duration-200',

                // Misc
                'cursor-pointer',
                'overflow-hidden',
                'whitespace-nowrap'
            ]
        })
    },
    jumptopageinput: {
        root: {
            class: 'inline-flex mx-2'
        },
        input: {
            root: {
                class: [
                    'relative',

                    //Font
                    'leading-none',

                    // Display
                    'block',
                    'flex-auto',

                    // Colors
                    'text-surface-600 dark:text-surface-200',
                    'placeholder:text-surface-400 dark:placeholder:text-surface-500',
                    'bg-surface-0 dark:bg-surface-950',
                    'border border-surface-300 dark:border-surface-700',

                    // Sizing and Spacing
                    'w-[1%] max-w-[3rem]',
                    'py-2 px-3 m-0',

                    //Shape
                    'rounded-md',

                    // Transitions
                    'transition',
                    'duration-200',

                    // States
                    'hover:border-surface-400 dark:hover:border-surface-600',
                    'focus:outline-none focus:shadow-none',
                    'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500',

                    // Misc
                    'cursor-pointer',
                    'overflow-hidden overflow-ellipsis',
                    'whitespace-nowrap',
                    'appearance-none'
                ]
            }
        }
    },
    jumptopagedropdown: {
        root: ({ props, state }) => ({
            class: [
                // Display and Position
                'inline-flex',
                'relative',

                // Shape
                'h-10',
                'rounded-md',

                // Spacing
                'mx-2',

                // Color and Background
                'bg-surface-0 dark:bg-surface-950',
                'border border-surface-300 dark:border-surface-700',

                // Transitions
                'transition-all',
                'duration-200',

                // States
                'hover:border-surface-400 dark:hover:border-surface-600',
                { 'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500': !state.focused },

                // Misc
                'cursor-pointer',
                'select-none',
                { 'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        input: {
            class: [
                //Font
                'leading-[normal]',

                // Display
                'block',
                'flex-auto',

                // Color and Background
                'bg-transparent',
                'border-0',
                'text-surface-800 dark:text-white/80',

                // Sizing and Spacing
                'w-[1%]',
                'py-2 pl-3 pr-0',

                //Shape
                'rounded-none',

                // Transitions
                'transition',
                'duration-200',

                // States
                'focus:outline-none focus:shadow-none',

                // Misc
                'relative',
                'cursor-pointer',
                'overflow-hidden overflow-ellipsis',
                'whitespace-nowrap',
                'appearance-none'
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
                'rounded-tr-md',
                'rounded-br-md'
            ]
        },
        panel: {
            class: [
                // Colors
                'bg-surface-0 dark:bg-surface-900',
                'text-surface-700 dark:text-white/80',

                // Shape
                'border border-surface-300 dark:border-surface-700',
                'rounded-md',
                'shadow-md'
            ]
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
                    'text-surface-700 dark:text-white/80': !context.focused && !context.selected,
                    'bg-surface-200 dark:bg-surface-600/60': context.focused && !context.selected,
                    'text-surface-700 dark:text-white/80': context.focused && !context.selected,

                    'text-primary-highlight-inverse': context.selected,
                    'bg-primary-highlight': context.selected
                },

                //States
                { 'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.focused && !context.selected },
                { 'hover:bg-primary-highlight-hover': context.selected },
                { 'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]': context.focused && !context.selected },

                // Transitions
                'transition-shadow',
                'duration-200',

                // Misc
                'cursor-pointer',
                'overflow-hidden',
                'whitespace-nowrap'
            ]
        })
    },
    start: {
        class: 'mr-auto'
    },
    end: {
        class: 'ml-auto'
    },
    current: {
        class: 'text-xs'
    },
};
