<script setup>
import { ref, onUnmounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { Inertia } from "@inertiajs/inertia";
import { WithdrawalRequestSuccessfulIcon, DepositSuccessfulIcon } from "@/Components/Icons/brand.jsx";
import Dialog from 'primevue/dialog';
import Button from "@/Components/Button.vue";
import { transactionFormat } from '@/Composables/index.js';

const { formatDate, formatDateTime, formatAmount } = transactionFormat();

// Reactive references for dialog visibility and transaction data
const showWithdrawalDialog = ref(false);
const showDepositDialog = ref(false);
const transaction = ref({});
const withdrawal_type = ref(null);

// Use Inertia's usePage to get flash data from session
const page = usePage();

let removeFinishEventListener = Inertia.on("finish", () => {
    if (page.props.notification) {
        transaction.value = page.props.notification.details;
        withdrawal_type.value = page.props.notification.withdrawal_type || null;

        if (page.props.notification.type === 'withdrawal') {
            showWithdrawalDialog.value = true;
        } else if (page.props.notification.type === 'deposit') {
            console.log('enter: ', page.props.notification.type)

            showDepositDialog.value = true;
        }
    }
});

onUnmounted(() => removeFinishEventListener());

</script>

<template>
    <!-- Withdrawal Dialog -->
    <Dialog
        v-model:visible="showWithdrawalDialog"
        modal
        :pt="{
            root: 'w-80 flex flex-col items-center rounded-2xl border border-gray-200 bg-white py-5 px-4',
            mask: {
            style: 'backdrop-filter: blur(2px)'
            }
        }"
    >
        <template #container="{ closeCallback }">
            <div class="flex flex-col items-center gap-5 self-stretch">
                <WithdrawalRequestSuccessfulIcon class="w-[225px] h-[150px]" />
                <div class="flex flex-col items-center gap-1 self-stretch">
                    <span class="self-stretch text-gray-950 text-center text-sm font-semibold">{{ $t('public.withdrawal_request_submitted') }}</span>
                    <span class="self-stretch text-gray-700 text-center text-xs">{{ $t('public.withdrawal_request_submitted_message') }}</span>
                </div>
                <div class="flex flex-col items-center py-2 gap-2 self-stretch">
                    <div class="flex flex-col justify-center items-start gap-1 self-stretch">
                        <span class="w-[140px] text-gray-500 text-xs font-medium">{{ $t('public.transaction_id') }}</span>
                        <span class="self-stretch text-gray-950 text-sm font-medium ">{{ transaction.transaction_number }}</span>
                    </div>
                    <div class="flex flex-col justify-center items-start gap-1 self-stretch">
                        <span class="w-[140px] text-gray-500 text-xs font-medium">{{ $t('public.requested_date') }}</span>
                        <span class="self-stretch text-gray-950 text-sm font-medium ">{{ formatDateTime(transaction.created_at) }}</span>
                    </div>
                    <div class="flex flex-col justify-center items-start gap-1 self-stretch">
                        <span class="w-[140px] text-gray-500 text-xs font-medium">{{ $t('public.from') }}</span>
                        <span class="self-stretch text-gray-950 text-sm font-medium ">
                            {{ withdrawal_type === 'rebate' ? $t('public.rebate') : withdrawal_type === 'bonus' ? $t('public.bonus') : transaction.from_meta_login }}
                        </span>
                    </div>
                    <div class="flex flex-col justify-center items-start gap-1 self-stretch">
                        <span class="w-[140px] text-gray-500 text-xs font-medium">{{ $t('public.requested_amount') }}</span>
                        <span class="self-stretch text-gray-950 text-sm font-medium ">$ {{ formatAmount(transaction.amount) }}</span>
                    </div>
                    <div class="flex flex-col items-start gap-1 self-stretch md:flex-row">
                        <span class="min-w-[140px] text-gray-500 text-xs font-medium">{{ $t('public.receiving_address') }}</span>
                        <span class="text-gray-950 w-full md:max-w-[200px] text-sm font-medium break-words">{{ transaction.to_wallet_address }}</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center pt-5 gap-4 self-stretch">
                <Button type="button" variant="primary-flat" class="w-full" @click="closeCallback">
                    {{ $t('public.alright') }}
                </Button>
            </div>
        </template>
    </Dialog>

    <!-- Deposit Dialog -->
    <Dialog
        v-model:visible="showDepositDialog"
        modal
        :pt="{
            root: 'w-80 flex flex-col items-center rounded-2xl border border-gray-200 bg-white py-5 px-4',
            mask: {
            style: 'backdrop-filter: blur(2px)'
            }
        }"
    >
        <template #container="{ closeCallback }">
            <div class="flex flex-col items-center gap-5 self-stretch">
                <DepositSuccessfulIcon class="w-[225px] h-[150px]" />
                <div class="flex flex-col items-center gap-1 self-stretch">
                    <span class="self-stretch text-gray-950 text-center text-sm font-semibold">{{ $t('public.deposit_successful') }}</span>
                    <span class="self-stretch text-gray-700 text-center text-xs">{{ $t('public.deposit_successful_message') }}</span>
                </div>
                <div class="flex flex-col items-center py-2 gap-2 self-stretch">
                    <div class="flex flex-col justify-center items-start gap-1 self-stretch">
                        <span class="w-[140px] text-gray-500 text-xs font-medium">{{ $t('public.date') }}</span>
                        <span class="self-stretch text-gray-950 text-sm font-medium break-words">{{ formatDateTime(transaction.approved_at) }}</span>
                    </div>
                    <div class="flex flex-col justify-center items-start gap-1 self-stretch">
                        <span class="w-[140px] text-gray-500 text-xs font-medium">{{ $t('public.account') }}</span>
                        <span class="self-stretch text-gray-950 text-sm font-medium break-words">{{ transaction.transaction_number }}</span>
                    </div>
                    <div class="flex flex-col justify-center items-start gap-1 self-stretch">
                        <span class="w-[140px] text-gray-500 text-xs font-medium">{{ $t('public.deposit_amount') }}</span>
                        <span class="self-stretch text-gray-950 text-sm font-medium break-words">{{ transaction.transaction_amount }}</span>
                    </div>
                    <div class="flex flex-col justify-center items-start gap-1 self-stretch">
                        <span class="w-[140px] text-gray-500 text-xs font-medium">{{ $t('public.txid') }}</span>
                        <span class="self-stretch text-gray-950 text-sm font-medium break-words">{{ transaction.txn_hash }}</span>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center pt-5 gap-4 self-stretch">
                <Button type="button" variant="primary-flat" class="w-full" @click="closeCallback">
                    {{ $t('public.alright') }}
                </Button>
            </div>
        </template>
    </Dialog>
</template>
