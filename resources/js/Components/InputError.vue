<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <div v-show="message">
        <p class="text-xs text-error-500">
            {{ message }}
        </p>
    </div>
</template>
