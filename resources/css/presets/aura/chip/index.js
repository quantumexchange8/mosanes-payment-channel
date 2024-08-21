export default {
    root: {
        class: [
            // Flexbox
            'inline-flex justify-center items-center',

            // Spacing
            'px-3 py-1.5',

            // Shape
            'rounded-lg',

            // Border
            'border border-gray-300',

            // Box shadow
            'shadow-input',

            // Conditional classes based on state
            'hover:bg-gray-50',
        ]
    },
    label: {
        class: 'text-gray-950 text-center text-xs'
    },
    icon: {
        class: 'leading-6 mr-2'
    },
    image: {
        class: ['w-8 h-8 -ml-2 mr-2', 'rounded-full']
    },
    removeIcon: {
        class: [
            // Shape
            'rounded-md leading-6',

            // Spacing
            'ml-[0.375rem]',

            // Size
            'w-4 h-4',

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer'
        ]
    }
};
