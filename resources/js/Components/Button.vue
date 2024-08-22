<script setup>
import { toRefs, computed } from 'vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator(value) {
            return [
                'primary-flat', 'primary-tonal', 'primary-outlined', 'primary-text',
                'gray-flat', 'gray-tonal', 'gray-outlined', 'gray-text',
                'error-flat', 'error-tonal', 'error-outlined', 'error-text',
                'success-flat', 'success-tonal', 'success-outlined', 'success-text',
            ].includes(value)
        },
    },
    type: {
        type: String,
        default: 'submit',
    },
    size: {
        type: String,
        default: 'base',
        validator(value) {
            return ['sm', 'base', 'lg'].includes(value)
        },
    },
    squared: {
        type: Boolean,
        default: false,
    },
    pill: {
        type: Boolean,
        default: false,
    },
    href: {
        type: String,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    iconOnly: {
        type: Boolean,
        default: false,
    },
    srText: {
        type: String || undefined,
        default: undefined,
    },
    external: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['click'])

const { type, variant, size, squared, pill, href, iconOnly, srText, external } = props

const { disabled } = toRefs(props)

const baseClasses = [
    'inline-flex items-center justify-center gap-3 transition-colors text-sm font-medium select-none disabled:cursor-not-allowed disabled:text-gray-400 focus:outline-none focus:ring',
]

const variantClasses = (variant) => ({
    'bg-primary-500 hover:bg-primary-600 border border-primary-500 hover:border-primary-600 focus:ring-primary-500 text-white disabled:border-gray-100 disabled:bg-gray-100': variant === 'primary-flat',
    'bg-primary-50 hover:bg-primary-100 border border-gray-50 hover:border-gray-100 focus:ring-primary-100 text-primary-500 disabled:bg-gray-100': variant === 'primary-tonal',
    'bg-white hover:bg-primary-25 border border-primary-500 focus:ring-primary-500 text-primary-500 shadow-input disabled:bg-white disabled:border-gray-200': variant === 'primary-outlined',
    'bg-transparent hover:bg-primary-25 focus:ring-primary-100 text-primary-500 disabled:bg-transparent': variant === 'primary-text',

    'bg-gray-400 hover:bg-gray-500 border border-gray-400 hover:border-gray-500 focus:ring-gray-500 text-white disabled:border-gray-100 disabled:bg-gray-100': variant === 'gray-flat',
    'bg-gray-100 hover:bg-gray-200 border border-gray-100 hover:border-gray-200 focus:ring-gray-100 text-gray-500 disabled:border-gray-100 disabled:bg-gray-100': variant === 'gray-tonal',
    'bg-white hover:bg-gray-50 border border-gray-300 focus:ring-gray-300 text-gray-950 shadow-input disabled:bg-white disabled:border-gray-200': variant === 'gray-outlined',
    'bg-transparent hover:bg-gray-100 focus:ring-gray-100 text-gray-500 disabled:bg-transparent': variant === 'gray-text',

    'bg-error-500 hover:bg-error-600 border border-error-500 hover:border-error-600 focus:ring-error-500 text-white disabled:border-gray-100 disabled:bg-gray-100': variant === 'error-flat',
    'bg-error-50 hover:bg-error-100 border border-error-50 hover:border-error-100 focus:ring-error-100 text-error-500 disabled:border-gray-100 disabled:bg-gray-100': variant === 'error-tonal',
    'bg-white hover:bg-error-50 border border-error-500 focus:ring-error-500 text-error-500 shadow-input disabled:bg-white disabled:border-gray-200': variant === 'error-outlined',
    'bg-transparent hover:bg-error-50 focus:ring-error-50 text-error-500 disabled:bg-transparent': variant === 'error-text',

    'bg-success-500 hover:bg-success-600 focus:ring-success-500 text-white disabled:bg-gray-100': variant === 'success-flat',
    'bg-success-50 hover:bg-success-100 border border-success-50 hover:border-success-100 focus:ring-success-100 text-success-500 disabled:border-gray-100 disabled:bg-gray-100': variant === 'success-tonal',
    'bg-white hover:bg-success-50 border border-success-500 focus:ring-success-500 text-success-500 shadow-input disabled:bg-white disabled:border-gray-200': variant === 'success-outlined',
    'bg-transparent hover:bg-success-50 focus:ring-success-50 text-success-500 disabled:bg-transparent': variant === 'success-text',
})

const classes = computed(() => [
    ...baseClasses,
    iconOnly
        ? {
            'p-2.5': size === 'sm',
            'p-3': size === 'base',
            'p-4': size === 'lg',
        }
        : {
            'px-4 py-2': size === 'sm',
            'px-6 py-3': size === 'base',
            'px-8 py-4': size === 'lg',
        },
    variantClasses(variant),
    {
        'rounded-lg': !squared && !pill,
        'rounded-full': pill,
    },
    {
        'pointer-events-none': href && disabled.value,
    },
])

const iconSizeClasses = computed(() => ({
    'w-4 h-4': props.size === 'sm',
    'w-5 h-5': props.size === 'base' || props.size === 'lg',
}))

const handleClick = (e) => {
    if (disabled.value) {
        e.preventDefault()
        e.stopPropagation()
        return
    }
    emit('click', e)
}

const Tag = external ?  'a' : Link
</script>

<template>
    <component
        :is="Tag"
        v-if="href"
        :href="!disabled ? href : null"
        :class="classes"
        :aria-disabled="disabled.toString()"
    >
        <span
            v-if="srText"
            class="sr-only"
        >
            {{ srText }}
        </span>

        <slot :iconSizeClasses="iconSizeClasses" />
    </component>

    <button
        v-else
        :type="type"
        :class="classes"
        @click="handleClick"
        :disabled="disabled"
    >
        <span
            v-if="srText"
            class="sr-only"
        >
            {{ srText }}
        </span>

        <slot :iconSizeClasses="iconSizeClasses" />
    </button>
</template>
