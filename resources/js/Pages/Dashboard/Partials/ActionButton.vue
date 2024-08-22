<script setup>
import Button from "@/Components/Button.vue";
import { IconInfoOctagonFilled } from '@tabler/icons-vue';
import {ref} from 'vue';
import { useForm } from '@inertiajs/vue3';
import Dialog from 'primevue/dialog';

const props = defineProps({
    account: Object,
});

const showDepositDialog = ref(false);

const openDialog = (dialogRef) => {
    if (dialogRef === 'deposit') {
        showDepositDialog.value = true;
    } 
}

const closeDialog = (dialogName) => {
    if (dialogName === 'deposit') {
        showDepositDialog.value = false;
        depositForm.reset();
    } 
}

const depositForm = useForm({
    meta_login: props.account.meta_login,
});

const transferForm = useForm({
    account_id: props.account.id,
    to_meta_login: '',
    amount: 0,
});

const submitForm = (formType) => {
    if (formType === 'deposit') {
        depositForm.post(route('dashboard.deposit_to_account'), {
            onSuccess: () => closeDialog('deposit'),
        });
    } 
}
</script>

<template>
    <Button
        type="button"
        variant="gray-outlined"
        size="sm"
        class="w-full"
        @click="openDialog('deposit')"
    >
        {{ $t('public.deposit') }}
    </Button>

    <Dialog v-model:visible="showDepositDialog" :header="$t('public.deposit')" modal class="dialog-xs">
        <div class="flex flex-col items-center gap-8 self-stretch">
            <div class="flex flex-col justify-center items-center py-4 px-8 gap-2 self-stretch bg-gray-200">
                <span class="text-gray-500 text-center text-xs font-medium">#{{ props.account.meta_login }} - {{ $t('public.current_account_balance') }}</span>
                <span class="text-gray-950 text-center text-xl font-semibold">$ {{ props.account.balance }}</span>
            </div>
            <div class="flex flex-col items-center self-stretch">
                <div class="h-2 self-stretch bg-info-500"></div>
                <div class="flex justify-center items-start py-3 gap-3 self-stretch">
                    <div class="text-info-500">
                        <IconInfoOctagonFilled size="20" stroke-width="1.25" />
                    </div>
                    <div class="flex flex-col items-start gap-1 flex-grow">
                        <span class="self-stretch text-gray-950 text-sm font-semibold">{{ $t('public.deposit_info_header') }}</span>
                        <span class="self-stretch text-gray-500 text-xs">
                            {{ $t('public.deposit_info_message') }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-end items-center pt-5 gap-4 self-stretch">
            <Button type="button" variant="primary-flat" @click.prevent="submitForm('deposit')">{{ $t('public.deposit_now') }}</Button>
        </div>
    </Dialog>

</template>
