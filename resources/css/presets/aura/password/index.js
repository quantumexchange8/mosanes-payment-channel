export default {
    root: ({ props }) => ({
        class: ['inline-flex relative w-full', { '[&>input]:pr-10': props.toggleMask }]
    }),
    panel: {
        class: [
            // Spacing
            'p-3',

            // Shape
            'border',
            'shadow-input rounded-lg',

            // Colors
            'bg-white',
            'text-gray-500',
            'border-gray-300',

            // Font
            'text-xs'
        ]
    },
    meter: {
        class: [
            // Position and Overflow
            'overflow-hidden',
            'relative',

            // Shape and Size
            'border-0',
            'h-2',
            'rounded-md',

            // Spacing
            'mb-2',

            // Colors
            'bg-gray-300'
        ]
    },
    meterlabel: ({ instance }) => ({
        class: [
            // Size
            'h-full',

            // Colors
            {
                'bg-error-500': instance?.meter?.strength == 'weak',
                'bg-warning-500': instance?.meter?.strength == 'medium',
                'bg-success-500': instance?.meter?.strength == 'strong'
            },

            // Transitions
            'transition-all duration-1000 ease-in-out'
        ]
    }),
    showicon: {
        class: ['absolute top-1/2 right-3 -mt-2 z-10', 'text-gray-500']
    },
    hideicon: {
        class: ['absolute top-1/2 right-3 -mt-2 z-10', 'text-gray-500']
    },
    input: {
        root: ({ props, context, parent }) => ({
            class: [
                // Font
                'caret-primary-500',
                'text-sm',

                // Flex
                { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },

                // Spacing
                'm-0',
                {
                    'py-3 px-3.5': props.size == 'large',
                    'py-1.5 px-2': props.size == 'small',
                    'py-3 px-4': props.size == null
                },

                // Shape
                { 'rounded-lg': parent.instance.$name !== 'InputGroup' },
                { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
                { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
                { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },

                // Colors
                'text-gray-950',
                'placeholder:text-gray-400',
                { 'bg-white': !context.disabled },
                'border',
                { 'border-gray-300': !props.invalid },

                // Invalid State
                { 'border-error-500': props.invalid },

                // States
                {
                    'hover:border-gray-500': !context.disabled && !props.invalid,
                    'focus:outline-none focus:ring-0 focus:border-primary-500': !context.disabled,
                    'bg-gray-50 text-gray-300 placeholder:text-gray-300 select-none pointer-events-none cursor-default': context.disabled
                },

                // Filled State *for FloatLabel
                { filled: parent.instance?.$parentInstance?.$name == 'FloatLabel' && parent.props.modelValue !== null && parent.props.modelValue?.length !== 0 },

                // Misc
                'appearance-none shadow-input',
                'transition-colors duration-200',
                'w-full'
            ]
        })
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
