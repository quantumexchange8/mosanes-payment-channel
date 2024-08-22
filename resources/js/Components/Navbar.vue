<script setup>
import { sidebarState } from '@/Composables'
import {
    IconWorld,
    IconLogout,
    IconMenu2,
    IconQrcode,
    IconCopy
} from '@tabler/icons-vue';
import QrcodeVue from 'qrcode.vue'
import {Link, usePage} from "@inertiajs/vue3";
import OverlayPanel from "primevue/overlaypanel";
import {ref} from "vue";
import {loadLanguageAsync} from "laravel-vue-i18n";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "@/Components/Button.vue";
import Tag from "primevue/tag";
import ApplicationLogo from '@/Components/ApplicationLogo.vue';

defineProps({
    title: String
})

const op = ref();
const visible = ref(false);
const registerLink = ref(`${window.location.origin}/register/${usePage().props.auth.user.referral_code}`);
const tooltipText = ref('copy')
const qrcodeContainer = ref();

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

const copyToClipboard = (text) => {
    const textToCopy = text;

    const textArea = document.createElement('textarea');
    document.body.appendChild(textArea);

    textArea.value = textToCopy;
    textArea.select();

    try {
        const successful = document.execCommand('copy');

        tooltipText.value = 'copied';
        setTimeout(() => {
            tooltipText.value = 'copy';
        }, 1500);
    } catch (err) {
        console.error('Copy to clipboard failed:', err);
    }

    document.body.removeChild(textArea);
}

const downloadQrCode = () => {
    const canvas = qrcodeContainer.value.querySelector("canvas");
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
}
</script>

<template>
    <nav
        aria-label="secondary"
        class="w-full sticky top-0 z-10 py-2 px-3 bg-gray-25 flex items-center gap-3"
    >
        <!-- <div
            class="inline-flex justify-center items-center rounded-full hover:bg-gray-100 w-12 h-12 shrink-0 grow-0 hover:select-none hover:cursor-pointer"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
        >
            <IconMenu2 size="20" color="#182230" stroke-width="1.25" />
        </div>
        <div
            class="text-base md:text-lg font-semibold text-gray-950 w-full"
        >
            {{ title }}
        </div> -->
        <div class="w-11 h-7 flex justify-center items-center px-2">
            <ApplicationLogo class="w-7 h-7 fill-logo" />
        </div>
        <span class="flex flex-1 text-gray-950 text-lg font-bold">
            Mosanes.
        </span>
        <div class="flex items-center">
            <!-- <div
                class="w-12 h-12 p-3.5 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-100 text-gray-800"
                @click="visible = true"
            >
                <IconQrcode size="20" stroke-width="1.25" />
            </div> -->
            <div
                class="w-12 h-12 p-3.5 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-100 text-gray-800"
                @click="toggle"
            >
                <IconWorld size="20" stroke-width="1.25" />
            </div>
            <Link
                class="w-12 h-12 p-3.5 flex items-center justify-center rounded-full hover:cursor-pointer hover:bg-gray-100 text-gray-800"
                :href="route('logout')"
                method="post"
                as="button"
            >
                <IconLogout size="20" stroke-width="1.25" />
            </Link>
        </div>
    </nav>

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


    <Dialog
        v-model:visible="visible"
        modal
        header=" "
        class="dialog-xs md:dialog-md"
    >
        <div class="flex flex-col gap-5 md:gap-8 items-center self-stretch">
            <div class="flex flex-col gap-1 items-center self-stretch">
                <span class="md:text-xl font-bold text-gray-950">{{ $t('public.referral_qr_code') }}</span>
                <span class="text-xs md:text-base text-gray-500">{{ $t('public.referral_caption') }}</span>
            </div>

            <!-- qr code -->
            <div class="flex flex-col items-center gap-5 self-stretch">
                <div
                    ref="qrcodeContainer">
                    <qrcode-vue
                        ref="qrcode"
                        :value="registerLink"
                        :margin="2"
                        :size="200"
                    />
                </div>
                <Button
                    type="button"
                    variant="primary-flat"
                    size="lg"
                    @click="downloadQrCode"
                >
                    {{ $t('public.download_qr_to_invite_friends') }}
                </Button>
            </div>

            <div class="flex gap-3 items-center self-stretch">
                <div class="h-[1px] bg-gray-200 rounded-[5px] w-full"></div>
                <div class="text-xs md:text-sm text-gray-500 text-center min-w-[145px] md:w-full">{{ $t('public.or_access_the_link_below') }}</div>
                <div class="h-[1px] bg-gray-200 rounded-[5px] w-full"></div>
            </div>

            <div class="flex gap-3 items-center self-stretch relative">
                <InputText
                    v-model="registerLink"
                    class="truncate w-full"
                    readonly
                />
                <Tag
                    v-if="tooltipText === 'copied'"
                    class="absolute -top-7 -right-3"
                    severity="contrast"
                    :value="$t(`public.${tooltipText}`)"
                ></Tag>
                <Button
                    type="button"
                    variant="gray-text"
                    iconOnly
                    pill
                    @click="copyToClipboard(registerLink)"
                >
                    <IconCopy size="20" color="#667085" stroke-width="1.25" />
                </Button>
            </div>
        </div>
    </Dialog>
</template>
