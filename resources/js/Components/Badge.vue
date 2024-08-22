<script setup>
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        default: 'info',
    },
    pill: {
        type: Boolean,
        default: false,
    }
});

const { variant, pill } = props;

const baseClasses = [
    'min-w-5 flex flex-col justify-center items-center text-center'
]

const variantClasses = (variant) => ({
    'bg-info-400': variant === 'info',
    'bg-info-400 rounded px-1 py-[1px]': variant === 'numberbadge'
})

const classes = computed(() => [
    ...baseClasses,
    variantClasses(variant),
    {
        'rounded p-0.5': !pill && variant !== 'numberbadge',
        'rounded-full py-px px-1': pill,
    }
]);
</script>

<template>
    <div
        :class="classes"
    >
        <slot />
    </div>
</template>
