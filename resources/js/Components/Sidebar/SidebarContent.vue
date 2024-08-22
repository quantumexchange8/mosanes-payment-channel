<script setup>
import PerfectScrollbar from '@/Components/PerfectScrollbar.vue'
import SidebarLink from '@/Components/Sidebar/SidebarLink.vue'
import SidebarCollapsible from '@/Components/Sidebar/SidebarCollapsible.vue'
import SidebarCollapsibleItem from '@/Components/Sidebar/SidebarCollapsibleItem.vue'
import {ref} from "vue";
import {Link, usePage} from "@inertiajs/vue3";
import {
    IconLayoutDashboard,
    IconUsersGroup,
    IconId,
    IconCoinMonero,
    IconBusinessplan,
    IconReceipt2,
    IconFileAnalytics,
    IconLogout,
    IconDownload,
} from '@tabler/icons-vue';

const user = usePage().props.auth.user;

</script>

<template>
    <PerfectScrollbar
        tagname="nav"
        aria-label="main"
        class="relative flex flex-col flex-1 max-h-full gap-1 px-5 py-3 items-center"
    >
        <!-- Dashboard -->
        <SidebarLink
            :title="$t('public.dashboard')"
            :href="route('dashboard')"
            :active="route().current('dashboard')"
        >
            <template #icon>
                <IconLayoutDashboard :size="20" stroke-width="1.25" />
            </template>
        </SidebarLink>

        <!-- Account -->
        <SidebarLink
            :title="$t('public.account')"
            :href="route('account')"
            :active="route().current('account')"
        >
            <template #icon>
                <IconId :size="20" stroke-width="1.25" />
            </template>
        </SidebarLink>

        <!-- Asset Master -->
        <SidebarLink
            :title="$t('public.asset_master')"
            :href="route('asset_master')"
            :active="route().current('asset_master') || route().current('asset_master.showPammInfo')"
        >
            <template #icon>
                <IconCoinMonero :size="20" stroke-width="1.25" />
            </template>
        </SidebarLink>

        <!-- Structure -->
        <SidebarLink
            :title="$t('public.structure')"
            :href="route('structure')"
            :active="route().current('structure')"
        >
            <template #icon>
                <IconUsersGroup :size="20" stroke-width="1.25" />
            </template>
        </SidebarLink>

        <!-- Transaction -->
        <SidebarLink
            :title="$t('public.transaction')"
            :href="route('transaction')"
            :active="route().current('transaction')"
        >
            <template #icon>
                <IconReceipt2 :size="20" stroke-width="1.25" />
            </template>
        </SidebarLink>

        <!-- Report -->
       <SidebarLink
            v-if="user.role == 'agent'"
           :title="$t('public.report')"
           :href="route('report')"
           :active="route().current('report')"
       >
           <template #icon>
               <IconFileAnalytics :size="20" stroke-width="1.25" />
           </template>
       </SidebarLink>

        <!-- Rebate allocate -->
<!--        <SidebarLink-->
<!--            :title="$t('public.rebate_allocate')"-->
<!--            :href="route('rebate_allocate')"-->
<!--            :active="route().current('rebate_allocate')"-->
<!--        >-->
<!--            <template #icon>-->
<!--                <IconBusinessplan :size="20" stroke-width="1.25" />-->
<!--            </template>-->
<!--        </SidebarLink>-->

        <!-- Download Center -->
       <SidebarLink
           :title="$t('public.download_center')"
           :href="route('download_center')"
           :active="route().current('download_center')"
       >
           <template #icon>
               <IconDownload :size="20" stroke-width="1.25" />
           </template>
       </SidebarLink>

        <div class="py-6 w-full">
            <SidebarLink
                :title="$t('public.log_out')"
                :href="route('logout')"
                method="post"
                as="button"
                class="text-left"
            >
                <template #icon>
                    <IconLogout :size="20" stroke-width="1.25" />
                </template>
            </SidebarLink>
        </div>
    </PerfectScrollbar>
</template>
