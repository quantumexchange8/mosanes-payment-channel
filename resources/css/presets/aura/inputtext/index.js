export default {
    root: ({ props, context, parent }) => ({
        class: [
            // Font
            'caret-primary-500 text-sm',

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
                'bg-gray-50 text-gray-300 disabled:bg-gray-100 disabled:text-gray-400 placeholder:text-gray-300 select-none disabled:cursor-not-allowed': context.disabled
            },

            // Filled State *for FloatLabel
            { filled: parent.instance?.$name == 'FloatLabel' && context.filled },

            // Misc
            'appearance-none shadow-input',
            'transition-colors duration-200'
        ]
    })
};
