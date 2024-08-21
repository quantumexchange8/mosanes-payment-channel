export default {
    root: ({ context, props, parent }) => ({
        class: [
            // Font
            'leading-none caret-primary-500 text-sm',

            // Spacing
            'm-0',
            'py-3 px-4',

            // Shape
            'rounded-md',

            // Colors
            'text-gray-950',
            'placeholder:text-gray-400',
            { 'bg-surface-0': !context.disabled },
            'border',
            { 'border-surface-300': !props.invalid },

            // Invalid State
            'invalid:focus:ring-red-200',
            'invalid:hover:border-red-500',
            { 'border-red-500': props.invalid },

            // States
            {
                'hover:border-surface-400': !context.disabled && !props.invalid,
                'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 focus:z-10': !context.disabled,
                'bg-surface-200 select-none pointer-events-none cursor-default': context.disabled
            },

            // Filled State *for FloatLabel
            { filled: parent.instance?.$name == 'FloatLabel' && props.modelValue !== null && props.modelValue?.length !== 0 },

            // Misc
            'appearance-none',
            'transition-colors duration-200'
        ]
    })
};
