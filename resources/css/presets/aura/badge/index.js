export default {
    root: ({ props }) => ({
        class: [
            // Font
            'font-semibold',

            {
                'text-xs': props.size == null,
                'text-lg leading-[2.25rem]': props.size == 'large',
                'text-2xl leading-[3rem]': props.size == 'xlarge'
            },

            // Spacing
            'flex',
            'px-2 py-1',
            'items-center',

            // Alignment
            'text-center inline-block',

            // Size
            'p-0 px-1',
            {
                'min-w-[1.5rem] h-[1.5rem]': props.size == null,
                'min-w-[2.25rem] h-[2.25rem]': props.size == 'large',
                'min-w-[3rem] h-[3rem]': props.size == 'xlarge'
            },

            // Shape
            {
                'rounded-full': props.value.length == 1,
                'rounded-[20px]': props.value.length !== 1
            },

            {
                'bg-primary-50 text-primary-500': props.severity == null || props.severity == 'primary',
                'bg-gray-50 text-gray-500': props.severity == 'gray',
                'bg-success-50 text-success-500': props.severity == 'success',
                'bg-info-50 text-info-500': props.severity == 'info',
                'bg-warning-50 text-warning-500': props.severity == 'warning',
                'bg-error-50 text-error-500': props.severity == 'error'
            }
        ]
    })
};
