export default {
    root: {
        class: [
            'relative',

            // Flexbox & Alignment
            'inline-flex',
            'align-bottom',

            // Misc
            'cursor-pointer',
            'select-none'
        ]
    },
    box: ({ props }) => ({
        class: [
            // Flexbox
            'flex justify-center items-center',

            // Size
            'w-full h-full',

            // Shape
            'border',
            'rounded-full',

            // Transition
            'transition duration-200 ease-in-out',

            // Colors
            { 'bg-surface-0': !props.disabled },
            {
                'text-surface-700': props.value !== props.modelValue && props.value !== undefined,
                'border-surface-300': props.value !== props.modelValue && props.value !== undefined && !props.invalid,
                'border-primary': props.value == props.modelValue && props.value !== undefined && !props.disabled
            },
            // Invalid State
            { 'border-red-500': props.invalid },

            // States
            {
                'peer-hover:border-surface-400': !props.disabled && !props.invalid && props.value !== props.modelValue,
                'peer-hover:border-primary-hover': !props.disabled && props.value == props.modelValue && props.value !== undefined,
                'peer-hover:[&>*:first-child]:bg-primary-600': !props.disabled && props.value == props.modelValue && props.value !== undefined,
                'peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500': !props.disabled,
                'bg-surface-200 [&>*:first-child]:bg-surface-600 border-surface-300 select-none pointer-events-none cursor-default': props.disabled
            }
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
            'rounded-md',
            'outline-none',
            'border-1 border-surface-200',

            // Misc
            'appearance-none',
            'cursor-pointer'
        ]
    },
    icon: ({ props }) => ({
        class: [
            'block',

            // Shape
            'rounded-full',

            // Size
            'w-2.5 h-2.5',

            // Conditions
            {
                'bg-surface-0': props.value !== props.modelValue,
                'bg-primary': props.value == props.modelValue,
                'backface-hidden invisible scale-[0.1]': props.value !== props.modelValue,
                'transform visible translate-z-0 scale-[1,1]': props.value == props.modelValue
            },

            // Transition
            'transition duration-200'
        ]
    })
};
