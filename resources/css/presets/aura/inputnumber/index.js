export default {
    root: ({ props, parent }) => ({
        class: [
            // Flex
            'inline-flex',
            'relative',
            { 'flex-col': props.showButtons && props.buttonLayout == 'vertical' },
            { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },

            // Shape
            { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' && !props.showButtons },
            { 'border-0 border-y border-l last:border-r border-surface-300 dark:border-surface-700': parent.instance.$name == 'InputGroup' && !props.showButtons },
            { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },

            //Sizing
            { '!w-16': props.showButtons && props.buttonLayout == 'vertical' }
        ]
    }),
    input: {
        root: ({ props, parent, context }) => ({
            class: [
                // Font
                'caret-primary-500 text-sm',

                // Display
                'flex flex-auto',

                //Text
                { 'text-center': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Spacing
                'm-0',

                // Shape
                'rounded-lg',
                { 'rounded-l-none rounded-r-none': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                { 'border-0': parent.instance.$parentInstance?.$name == 'InputGroup' && !parent.props.showButtons },

                // Colors
                'text-gray-950',
                'placeholder:text-gray-400',
                { 'bg-white': !context.disabled },
                'border',
                { 'border-gray-300': !parent.props.invalid },

                // Invalid State
                { 'border-error-500': parent.props.invalid },

                // States
                { 'hover:border-gray-500': !parent.props.invalid },
                'focus:outline-none focus:ring-0 focus:border-primary-500',
                { 'bg-gray-50 text-gray-300 placeholder:text-gray-300 select-none pointer-events-none cursor-default': context.disabled },

                // Filled State *for FloatLabel
                { filled: parent.instance?.$parentInstance?.$name == 'FloatLabel' && parent.state.d_modelValue !== null },

                //Position
                { 'order-2': parent.props.buttonLayout == 'horizontal' || parent.props.buttonLayout == 'vertical' },

                // Misc
                'appearance-none shadow-input',
                'transition-colors duration-200'
            ]
        })
    },
    buttongroup: ({ props }) => ({
        class: [
            // Flex
            'flex',
            'flex-col',
            { 'absolute top-px right-px h-[calc(100%-2px)] z-20': props.showButtons && props.buttonLayout == 'stacked' }
        ]
    }),

    incrementbutton: {
        root: ({ parent }) => ({
            class: [
                // Display
                'flex flex-auto',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                //Position
                'relative',
                { 'order-3': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'order-1': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //Color
                'text-surface-800 dark:text-surface-0',
                'bg-transparent',
                { 'dark:bg-surface-900': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                'border border-surface-300 dark:border-surface-700',
                { 'border-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'border-l-0': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' && parent.props.buttonLayout == 'horizontal' },
                { 'border-b-0': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' && parent.props.buttonLayout == 'vertical' },

                // Sizing
                'w-[3rem]',
                { 'px-4 py-3': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                { 'p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-md',
                { 'rounded-md': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'rounded-bl-none rounded-tl-none': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-bl-none rounded-br-none': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //States
                'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]',

                //Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        }),
        label: {
            class: 'h-0 w-0'
        }
    },
    decrementbutton: {
        root: ({ parent }) => ({
            class: [
                // Display
                'flex flex-auto',

                // Alignment
                'items-center',
                'justify-center',
                'text-center align-bottom',

                //Position
                'relative',
                { 'order-1': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'order-3': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //Color
                'text-surface-800 dark:text-surface-0',
                'bg-transparent',
                { 'dark:bg-surface-900': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                'border border-surface-300 dark:border-surface-700',
                { 'border-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'border-r-0': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' && parent.props.buttonLayout == 'horizontal' },
                { 'border-t-0': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' && parent.props.buttonLayout == 'vertical' },

                // Sizing
                'w-[3rem]',
                { 'px-4 py-3': parent.props.showButtons && parent.props.buttonLayout !== 'stacked' },
                { 'p-0': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'w-full': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                // Shape
                'rounded-md',
                { 'rounded-tr-none rounded-tl-none rounded-bl-none': parent.props.showButtons && parent.props.buttonLayout == 'stacked' },
                { 'rounded-tr-none rounded-br-none ': parent.props.showButtons && parent.props.buttonLayout == 'horizontal' },
                { 'rounded-tr-none rounded-tl-none ': parent.props.showButtons && parent.props.buttonLayout == 'vertical' },

                //States
                'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]',

                //Misc
                'cursor-pointer overflow-hidden select-none'
            ]
        }),
        label: {
            class: 'h-0 w-0'
        }
    }
};
