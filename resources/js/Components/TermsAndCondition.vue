<script setup>
import Dialog from "primevue/dialog";
import {onMounted, ref, watch, onUnmounted} from "vue";

const props = defineProps({
    termsLabel: String,
    terms: Object
})

const visible = ref(false);

// Create a ref to hold the current lang attribute value
const currentLang = ref(document.documentElement.lang)
const currentTerms = ref({})

// Function to handle changes to the lang attribute
const handleLangChange = () => {
    currentLang.value = document.documentElement.lang
    // Handle diff locale terms
    if (props.terms) {
        currentTerms.value = props.terms[currentLang.value] || props.terms['default']
    }
}

watch(() => props.terms, (newTerms) => {
    if (newTerms) {
        handleLangChange() // Call the function once terms is loaded
    }
}, { immediate: true })

// Watch for changes to the lang attribute on the <html> element
onMounted(() => {
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
                handleLangChange()
            }
        })
    })

    // Start observing the <html> element for attribute changes
    observer.observe(document.documentElement, { attributes: true })

    // Clean up the observer when the component is unmounted
    onUnmounted(() => {
        observer.disconnect()
    })
})
</script>

<template>
    <span
        v-if="termsLabel"
        class="text-primary font-medium no-underline hover:text-primary-600 select-none cursor-pointer capitalize"
        @click="visible = true"
    >{{ termsLabel }}</span>
    <slot></slot>

    <Dialog
        v-model:visible="visible"
        modal
        :header="currentTerms.title"
        class="dialog-xs md:dialog-lg"
    >
        <div class="prose w-full" v-html="currentTerms.contents"></div>
    </Dialog>
</template>
