<script setup>
import { IconWorld } from '@tabler/icons-vue';
import {ref} from "vue";
import {Head, usePage} from "@inertiajs/vue3";
import OverlayPanel from 'primevue/overlaypanel';
import ToastList from "@/Components/ToastList.vue";
import {loadLanguageAsync} from "laravel-vue-i18n";
import dayjs from "dayjs";
import ConfirmationDialog from "@/Components/ConfirmationDialog.vue";

defineProps({
    title: String
})

const op = ref();
const toggle = (event) => {
    op.value.toggle(event);
}

const currentLocale = ref(usePage().props.locale);
const locales = [
    {'label': 'English', 'value': 'en'},
    {'label': '中文', 'value': 'tw'},
];

const changeLanguage = async (langVal) => {
    try {
        currentLocale.value = langVal;
        await loadLanguageAsync(langVal);
        await axios.get(`/locale/${langVal}`);
    } catch (error) {
        console.error('Error changing locale:', error);
    }
};
</script>

<template>
    <Head :title="title"></Head>

    <div
        style="background-image: url('/img/background-login.svg'); background-repeat: repeat-x;"
        class="max-w-[360px] mx-auto"
    >
        <div class="flex flex-col min-h-screen">
            <div class="flex py-3 px-5 justify-end items-center">
                <div
                    class="w-[60px] h-[60px] p-[17.5px] flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-100 text-gray-800"
                    @click="toggle"
                >
                    <IconWorld size="25" stroke-width="1.25" />
                </div>
            </div>
            <div class="w-full flex flex-1 flex-col justify-center items-center pb-8">
                <div class="w-full flex justify-center">
                    <div class="w-full flex flex-col justify-center items-center mx-5">
                        <ToastList />
                        <ConfirmationDialog />
                        <slot />
                    </div>
                </div>
                <div class="text-center text-gray-500 text-xs mt-auto">© {{ dayjs().year() }} mosanes. All rights reserved.</div>
            </div>
        </div>
    </div>

    <OverlayPanel ref="op">
        <div class="py-2 flex flex-col items-center w-[120px]">
            <div
                v-for="locale in locales"
                class="p-3 flex items-center gap-3 self-stretch text-sm hover:bg-gray-100 hover:cursor-pointer"
                :class="{'bg-primary-50 text-primary-500': locale.value === currentLocale}"
                @click="changeLanguage(locale.value)"
            >
                {{ locale.label }}
            </div>
        </div>
    </OverlayPanel>
</template>
