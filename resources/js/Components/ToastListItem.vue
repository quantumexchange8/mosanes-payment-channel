<script setup>
import {onMounted} from "vue";
import {
    IconCircleCheckFilled,
    IconAlertTriangleFilled,
    IconCircleXFilled,
    IconInfoOctagonFilled,
    IconX
} from '@tabler/icons-vue';

const props = defineProps({
    title: String,
    message: String,
    type: String, // Accepts 'success', 'info', 'warning', 'error'
    duration: {
        type: Number,
        default: 3000
    }
});

onMounted(() => {
    setTimeout(() => emit('remove'), props.duration);
});

const emit = defineEmits(['remove']);

// Determine icon based on the type
const iconComponent = {
    success: IconCircleCheckFilled,
    warning: IconAlertTriangleFilled,
    error: IconCircleXFilled,
    info: IconInfoOctagonFilled
}[props.type];

const borderColor = {
    success: 'border-success-500',
    warning: 'border-warning-500',
    error: 'border-error-500',
    info: 'border-info-500',
}[props.type];


const textColor = {
    success: 'text-success-500',
    warning: 'text-warning-500',
    error: 'text-error-500',
    info: 'text-info-500',
}[props.type];

</script>
<template>
    <div
        class="mx-3 sm:mx-0 py-3 px-4 flex justify-center self-stretch gap-4 border-t-8 shadow-toast bg-white"
        :class="[
            message ? 'items-start' : 'items-center',
            borderColor
        ]"
        role="alert"
    >
        <div :class="textColor">
            <component :is="iconComponent" size="20" />
        </div>
        <div
            class="flex flex-col items-start w-full text-sm"
            :class="{
                'gap-1': message
            }"
        >
            <div class="text-gray-950 font-semibold">
                {{ title }}
            </div>
            <div class="text-gray-700">
                {{ message }}
            </div>
        </div>
        <div class="text-gray-400 hover:text-gray-600 hover:cursor-pointer select-none" @click="emit('remove')">
            <IconX size="16" stroke-width="1.25" />
        </div>
    </div>
</template>
