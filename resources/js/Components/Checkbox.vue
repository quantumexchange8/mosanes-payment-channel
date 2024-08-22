<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:checked'])

const props = defineProps({
    checked: {
        type: [Array, Boolean],
        default: false,
    },
    value: {
        default: null,
    },
})

const proxyChecked = computed({
    get() {
        return props.checked
    },

    set(val) {
        emit('update:checked', val)
    },
})
</script>

<template>
    <div class="inline-flex items-center">
        <label class="relative flex items-center rounded-full cursor-pointer" htmlFor="checkbox">
            <input
                type="checkbox"
                :value="value"
                v-model="proxyChecked"
                :class="proxyChecked ? 'text-primary-500 hover:text-primary-600 bg-transparent border-transparent focus:ring-0 focus:ring-offset-0' : 'before:content[\'\'] border border-gray-300 hover:border-gray-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity'"
                class="peer relative h-5 w-5 cursor-pointer select-none appearance-none rounded-full hover:before:opacity-10"
            />

            <span
                class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3327 4L5.99935 11.3333L2.66602 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        </label>
    </div>
</template>
