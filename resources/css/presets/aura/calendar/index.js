export default {
    root: {
        class: [
            // Display and Position
            'inline-flex',
            'max-w-full',
            'relative'
        ]
    },
    input: ({ props, parent, context }) => ({
        class: [
            // Display
            'flex flex-auto',

            // Font
            'text-sm',
            'font-normal',

            // Colors
            'text-gray-950',
            'placeholder:text-gray-400',
            { 'bg-white': !props.disabled },
            'border',
            { 'border-gray-300': !props.invalid },

            // Invalid State
            { 'border-error-500': props.invalid },

            // Spacing
            'm-0 py-3 px-4',

            // Shape
            'appearance-none',
            { 'rounded-lg': !props.showIcon || props.iconDisplay == 'input' },
            { 'rounded-l-lg  flex-1 pr-9': props.showIcon && props.iconDisplay !== 'input' },
            { 'rounded-lg flex-1 pr-9': props.showIcon && props.iconDisplay === 'input' },
            'shadow-input',

            // Transitions
            'transition-colors',
            'duration-200',

            'hover:outline-none hover:ring-0 hover:border-gray-500',
            'focus:outline-none focus:ring-0 focus:border-primary-500',

            // States
            {
                'hover:border-gray-500': !props.disabled && !props.invalid,
                'focus:outline-none focus:ring-0 focus:border-primary-500 focus:z-10': !props.disabled,
                'bg-gray-50 text-gray-300 placeholder:text-gray-300 select-none pointer-events-none cursor-default': props.disabled
            },

            // Filled State *for FloatLabel
            { filled: parent.instance?.$name == 'FloatLabel' && props.modelValue !== null }
        ]
    }),
    inputicon: ({ props }) => ({
        class: ['absolute top-[50%] -translate-y-1/2', 'text-gray-400', 'w-5 h-5 right-4']
    }),
    dropdownbutton: {
        root: {
            class: [
                'relative',

                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Shape
                'rounded-r-md',

                // Size
                'py-2 px-0',
                'w-10',
                'leading-[normal]',

                // Colors
                'text-primary-inverse',
                'bg-primary',
                'border border-primary',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-1',
                'hover:bg-primary-hover hover:border-primary-hover',
                'focus:ring-primary-500'
            ]
        }
    },
    panel: ({ props }) => ({
        class: [
            // Display & Position
            {
                absolute: !props.inline,
                'inline-block': props.inline
            },

            // Size
            { 'w-auto p-5 ': !props.inline },
            { 'min-w-[80vw] w-auto p-3 ': props.touchUI },
            { 'p-3 min-w-full': props.inline },

            // Shape
            'border rounded-lg',
            {
                'shadow-dialog': !props.inline
            },

            // Colors
            'bg-white',
            'border-gray-200',

            //misc
            { 'overflow-x-auto': props.inline }
        ]
    }),
    datepickerMask: {
        class: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90']
    },
    header: {
        class: [
            //Font
            'font-medium',

            // Flexbox and Alignment
            'flex items-center justify-between',

            // Spacing
            'p-0 pb-2',
            'm-0',

            // Shape
            'border-b',
            'rounded-t-lg',

            // Colors
            'text-gray-500',
            'bg-white',
            'border-gray-200'
        ]
    },
    previousbutton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-7 h-7',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-gray-500',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700',
            'hover:bg-surface-100',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    },
    title: {
        class: [
            // Text
            'leading-7',
            'mx-auto my-0'
        ]
    },
    monthTitle: {
        class: [
            // Font
            'text-base leading-[normal]',
            'font-medium',

            //shape
            'rounded-md',

            // Colors
            'text-gray-950',

            // Transitions
            'transition duration-200',

            // Spacing
            'p-1',
            'm-0 mr-2',

            // States
            'hover:text-primary-500',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',

            // Misc
            'cursor-pointer'
        ]
    },
    yearTitle: {
        class: [
            // Font
            'text-base leading-[normal]',
            'font-medium',

            //shape
            'rounded-md',

            // Colors
            'text-gray-950',

            // Transitions
            'transition duration-200',

            // Spacing
            'p-1',
            'm-0 mr-2',

            // States
            'hover:text-primary-500',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',

            // Misc
            'cursor-pointer'
        ]
    },
    nextbutton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-7 h-7',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-gray-500',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700',
            'hover:bg-surface-100',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    },
    table: {
        class: [
            // Font
            'text-sm',
            // Size & Shape
            'border-collapse',
            'w-full',

            // Spacing
            'm-0 mt-2'
        ]
    },
    tableheadercell: {
        class: [
            // Spacing
            'p-1',
            'font-medium'
        ]
    },
    weekheader: {
        class: ['leading-5', 'text-gray-500', 'opacity-60 cursor-default']
    },
    weeknumber: {
        class: ['text-surface-600', 'opacity-60 cursor-default']
    },
    weekday: {
        class: [
            // Colors
            'text-gray-500',
            'p-1'
        ]
    },
    day: {
        class: [
            // Spacing
            'p-1'
        ]
    },
    weeklabelcontainer: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'flex items-center justify-center',
            'mx-auto',

            // Shape & Size
            'w-8 h-8',
            'rounded-full',
            'border-transparent border',
            'leading-[normal]',

            // Colors
            {
                'text-surface-600 bg-transparent': !context.selected && !context.disabled,
                'text-primary-highlight-inverse bg-primary-highlight': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',
            {
                'hover:bg-surface-50': !context.selected && !context.disabled,
                'hover:bg-primary-highlight-hover': context.selected && !context.disabled
            },
            {
                'opacity-60 cursor-default': context.disabled,
                'cursor-pointer': !context.disabled
            }
        ]
    }),
    daylabel: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'flex items-center justify-center',
            'mx-auto',

            // Shape & Size
            'w-8 h-8',
            'rounded-full',
            'border-transparent border',
            'leading-[normal]',

            // Colors
            {
                'bg-gray-200 text-gray-950': context.date.today && !context.selected && !context.disabled,
                'bg-transparent text-gray-950': !context.selected && !context.disabled && !context.date.today,
                'text-primary-500 bg-primary-50': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring-0 focus:ring-primary-500 focus:z-10',
            {
                'hover:bg-surface-50': !context.selected && !context.disabled
            },
            {
                'text-gray-400 cursor-default': context.disabled,
                'cursor-pointer': !context.disabled
            }
        ]
    }),
    monthpicker: {
        class: [
            // Spacing
            'mt-2',
            'text-sm'
        ]
    },
    month: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-1/3',
            'p-1',

            // Shape
            'rounded-md',

            // Colors
            {
                'text-surface-600 bg-transparent': !context.selected && !context.disabled,
                'text-primary-highlight-inverse bg-primary-highlight': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',
            {
                'hover:bg-surface-100': !context.selected && !context.disabled
            },

            // Misc
            'cursor-pointer'
        ]
    }),
    yearpicker: {
        class: [
            // Spacing
            'mt-2'
        ]
    },
    year: ({ context }) => ({
        class: [
            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-1/2',
            'p-1',

            // Shape
            'rounded-md',

            // Colors
            {
                'text-surface-600 bg-transparent': !context.selected && !context.disabled,
                'text-primary-highlight-inverse bg-primary-highlight': context.selected && !context.disabled
            },

            // States
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',
            {
                'hover:bg-surface-100': !context.selected && !context.disabled
            },

            // Misc
            'cursor-pointer'
        ]
    }),
    timepicker: {
        class: [
            // Flexbox
            'flex',
            'justify-center items-center',

            // Borders
            'border-t-1',
            'border-solid border-surface-200',

            // Spacing
            'pt-2 mt-2'
        ]
    },
    separatorcontainer: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    separator: {
        class: [
            // Text
            'text-xl'
        ]
    },
    hourpicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    minutepicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    secondPicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    ampmpicker: {
        class: [
            // Flexbox and Alignment
            'flex',
            'items-center',
            'flex-col',

            // Spacing
            'px-2'
        ]
    },
    incrementbutton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-7 h-7',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-600',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700',
            'hover:bg-surface-100',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    },
    decrementbutton: {
        class: [
            'relative',

            // Flexbox and Alignment
            'inline-flex items-center justify-center',

            // Size
            'w-7 h-7',
            'p-0 m-0',

            // Shape
            'rounded-full',

            // Colors
            'text-surface-600',
            'border-0',
            'bg-transparent',

            // Transitions
            'transition-colors duration-200 ease-in-out',

            // States
            'hover:text-surface-700',
            'hover:bg-surface-100',
            'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',

            // Misc
            'cursor-pointer overflow-hidden'
        ]
    },
    groupcontainer: {
        class: [
            // Flexbox
            'flex'
        ]
    },
    group: {
        class: [
            // Flexbox and Sizing
            'flex-1',

            // Borders
            'border-l',
            'border-surface-200',

            // Spacing
            'pr-0.5',
            'pl-0.5',
            'pt-0',
            'pb-0',

            // Pseudo-Classes
            'first:pl-0',
            'first:border-l-0'
        ]
    },
    buttonbar: {
        class: [
            // Flexbox
            'flex justify-between items-center',

            // Spacing
            'pt-2',

            // Shape
            'border-t border-surface-200'
        ]
    },
    todaybutton: {
        root: {
            class: [
                // Flexbox and Alignment
                'inline-flex items-center justify-center',

                // Spacing
                'px-3 py-1 text-sm leading-[normal]',

                // Shape
                'rounded-md',

                // Colors
                'bg-transparent border-transparent',
                'text-primary',

                // Transitions
                'transition-colors duration-200 ease-in-out',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',
                'hover:bg-primary-300/20',

                // Misc
                'cursor-pointer'
            ]
        }
    },
    clearbutton: {
        root: {
            class: [
                // Flexbox and Alignment
                'inline-flex items-center justify-center',

                // Spacing
                'px-3 py-1 text-sm leading-[normal]',

                // Shape
                'rounded-md',

                // Colors
                'bg-transparent border-transparent',
                'text-primary',

                // Transitions
                'transition-colors duration-200 ease-in-out',

                // States
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10',
                'hover:bg-primary-300/20',

                // Misc
                'cursor-pointer'
            ]
        }
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
