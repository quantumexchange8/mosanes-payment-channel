export default {
    root: {
      class: 'w-full'
    },
    input: {
        class: 'hidden'
    },
    buttonbar: {
        class: [
            // Flexbox
            'flex',
            'flex-wrap',

            // Colors
            'bg-white',
            'text-gray-500',

            // Shape
            'rounded-tr-lg',
            'rounded-tl-lg'
        ]
    },
    chooseButton: {
        class: [
            'relative',

            // Alignments
            'items-center inline-flex text-center align-bottom justify-center',

            // Spacing
            'px-4 py-2',

            // Shape
            'rounded-md',

            // Font
            'leading-[normal]',
            'font-medium',

            // Colors
            'text-primary-inverse',
            'bg-primary',
            'border-primary',

            // States
            'hover:bg-primary-hover',
            'focus:outline-none focus:outline-offset-0 focus:ring-1',
            'focus:ring-primary',

            // Misc
            'overflow-hidden',
            'cursor-pointer'
        ]
    },
    chooseIcon: {
        class: ['mr-2', 'inline-block']
    },
    chooseButtonLabel: {
        class: ['flex-1', 'font-bold']
    },
    uploadbutton: {
        icon: {
            class: 'mr-2'
        }
    },
    cancelbutton: {
        icon: {
            class: 'mr-2'
        }
    },
    content: {
        class: [
            // Font
            'text-sm',

            // Position
            'relative',

            // Colors
            'bg-white',
            'text-gray-950',

            // Shape
            'rounded-b-lg',
            'w-full'
        ]
    },
    file: {
        class: [
            // Flexbox
            'flex',
            'items-center',
            'gap-3',

            // Spacing
            'px-4 py-3',
            'my-2',
            'last:mb-0',

            // Color
            'bg-gray-50',

            // Shape
            'rounded-xl',
            'w-full'
        ],
    },
    thumbnail: {
        class: 'shrink-0'
    },
    fileName: {
        class: 'break-all'
    },
    fileSize: {
        class: 'text-xs text-gray-400 mr-2'
    },
    uploadicon: {
        class: 'mr-2'
    },
    details: {
        class: 'w-full'
    },
    badge: {
        root: {
            class: 'hidden'
        }
    },
    actions: {
        class: 'flex justify-end w-full'
    },
    progressbar: {
        root: {
            class: [
                // Position and Overflow
                'overflow-hidden',
                'absolute top-0 left-0',

                // Shape and Size
                'border-0',
                'h-2',
                'rounded-md',
                'w-full',

                // Colors
                'bg-gray-100'
            ]
        },
        value: {
            class: [
                // Flexbox & Overflow & Position
                'absolute flex items-center justify-center overflow-hidden',

                // Colors
                'bg-primary-500',

                // Spacing & Sizing
                'm-0',
                'h-full w-0',

                // Shape
                'border-0',

                // Transitions
                'transition-width duration-1000 ease-in-out'
            ]
        }
    },
    removebutton: {
        root: {
            class: 'flex items-center text-gray-500 hover:text-error-500 w-5 h-5 grow-0 shrink-0 rounded-full'
        }
    },
    message: {
        root: {
            class: [
                // Color
                'bg-white',

                //Size
            ]
        },
        wrapper: {
            class: 'mt-2 px-0'
        },
        icon: {
            class: 'hidden'
        },
        closebutton: {
            class: 'hidden'
        },
        text: {
            class: [
                // Font
                'text-xs',
                'text-error-500'
            ]
        }
    }
};
