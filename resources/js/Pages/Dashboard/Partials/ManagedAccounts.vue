<script setup>
import {ref, onMounted, watchEffect} from "vue";
import ActionButton from "@/Pages/Dashboard/Partials/ActionButton.vue";
import Empty from '@/Components/Empty.vue';
import {generalFormat, transactionFormat} from "@/Composables/index.js";
import {usePage, Link} from "@inertiajs/vue3";

const isLoading = ref(false);
const accounts = ref([]);
const accountType = ref('manage');
const { formatAmount } = transactionFormat();
const { formatRgbaColor } = generalFormat();

// Fetch live accounts from the backend
const fetchLiveAccounts = async () => {
    isLoading.value = true;
    try {
        const response = await axios.get(`/dashboard/getLiveAccount?accountType=${accountType.value}`);
        accounts.value = response.data;
    } catch (error) {
        console.error('Error fetching live accounts:', error);
    } finally {
        isLoading.value = false;
    }
};

// Fetch live accounts when the component is mounted
onMounted(fetchLiveAccounts);

watchEffect(() => {
    if (usePage().props.toast !== null || usePage().props.notification !== null) {
        fetchLiveAccounts();
    }
});
</script>

<template>
    <div
        v-if="isLoading"
        class="flex flex-col justify-center items-center py-4 pl-6 pr-3 gap-5 flex-grow rounded-2xl border-l-8 bg-white shadow-toast animate-pulse"
    >
        <div class="flex items-center gap-5 self-stretch">
            <div class="w-32 h-3 bg-gray-200 rounded-full my-2"></div>
            <div
                class="flex px-2 py-1 justify-center items-center text-xs font-semibold hover:-translate-y-1 transition-all duration-300 ease-in-out rounded"
            >
                <div class="w-20 h-2.5 bg-gray-200 rounded-full my-2"></div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-2 self-stretch">
            <div class="w-full flex items-center gap-1 flex-grow">
                <span class="w-16 text-gray-500 text-xs">{{ $t('public.balance') }}:</span>
                <div class="w-20 h-2 bg-gray-200 rounded-full my-2"></div>
            </div>
            <div class="w-full flex items-center gap-1 flex-grow">
                <span class="w-16 text-gray-500 text-xs">{{ $t('public.equity') }}:</span>
                <div class="w-20 h-2 bg-gray-200 rounded-full my-2"></div>
            </div>
            <div class="w-full flex items-center gap-1 flex-grow">
                <span class="w-16 text-gray-500 text-xs">{{ $t('public.pamm') }}:</span>
                <div class="w-20 h-2 bg-gray-200 rounded-full my-2"></div>
            </div>
            <div class="w-full flex items-center gap-1 flex-grow">
                <span class="w-16 text-gray-500 text-xs">{{ $t('public.mature_in') }}:</span>
                <div class="w-20 h-2 bg-gray-200 rounded-full my-2"></div>
            </div>
        </div>
    </div>

    <div
        v-if="!isLoading && accounts.length > 0"
        class="w-full grid grid-cols-1 gap-5"
    >
        <div
            v-for="account in accounts"
            :key="account.id"
            class="flex flex-col justify-center items-center py-4 pl-6 pr-3 gap-5 flex-grow rounded-2xl border-l-8 bg-white shadow-toast w-full"
            :style="{'borderColor': `#${account.account_type_color}`}"
        >
            <div class="flex items-center gap-2 self-stretch">
                <div class="flex items-center content-center gap-3 flex-grow">
                    <span class="text-gray-950 font-semibold">#{{ account.meta_login }}</span>
                    <div
                        class="flex px-2 py-1 justify-center items-center text-xs font-semibold hover:-translate-y-1 transition-all duration-300 ease-in-out rounded"
                        :style="{
                            backgroundColor: formatRgbaColor(account.account_type_color, 0.15),
                            color: `#${account.account_type_color}`,
                        }"
                    >
                        {{ $t(`public.${account.account_type}`) }}
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2 self-stretch">
                <div class="w-full flex items-center gap-1 flex-grow">
                    <span class="w-16 text-gray-500 text-xs">{{ $t('public.balance') }}:</span>
                    <span class="text-gray-950 text-xs font-medium">$&nbsp;{{ formatAmount(account.balance) }}</span>
                </div>
                <div class="w-full flex items-center gap-1 flex-grow">
                    <span class="w-16 text-gray-500 text-xs">{{ $t('public.equity') }}:</span>
                    <span class="text-gray-950 text-xs font-medium">$&nbsp;{{ formatAmount(account.equity) }}</span>
                </div>
                <div class="w-full flex items-center gap-1 flex-grow">
                    <span class="w-16 text-gray-500 text-xs">{{ $t('public.pamm') }}:</span>
                    <!-- <Link
                        v-if="account.asset_master_id"
                        :href="route('asset_master.showPammInfo', account.asset_master_id)"
                        class="text-primary-500 text-xs font-semibold underline hover:text-primary-600"
                    >
                        {{ account.asset_master_name ?? '-' }}
                    </Link> -->
                    <div
                        v-if="account.asset_master_id"
                        class="text-primary-500 text-xs font-semibold underline hover:text-primary-600"
                    >
                        {{ account.asset_master_name ?? '-' }}
                    </div>
                    <span v-else class="text-gray-950 text-xs font-medium">-</span>
                </div>
                <div class="w-full flex items-center gap-1 flex-grow">
                    <span class="w-16 text-gray-500 text-xs">{{ $t('public.mature_in') }}:</span>
                    <span class="text-gray-950 text-xs font-medium">{{ account.asset_master_name ? account.remaining_days + ' ' + $t('public.days') : '-' }}</span>
                </div>
            </div>
            <div class="flex justify-end items-center gap-3 self-stretch">
                <ActionButton :account="account" />
            </div>
        </div>
    </div>

    <Empty
        v-else-if="!isLoading && accounts.length === 0"
        :title="$t('public.empty_managed_acccount_title')"
        :message="$t('public.empty_managed_acccount_message')"
    />
</template>
