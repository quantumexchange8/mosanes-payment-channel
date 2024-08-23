<script setup>
import {Head, usePage} from '@inertiajs/vue3'
import Sidebar from '@/Components/Sidebar/Sidebar.vue'
import Navbar from '@/Components/Navbar.vue'
import { sidebarState } from '@/Composables'
import ToastList from "@/Components/ToastList.vue";
import ConfirmationDialog from "@/Components/ConfirmationDialog.vue";
import NotificationDialog from '@/Components/NotificationDialog.vue';
import PageFooter from "@/Components/PageFooter.vue";

defineProps({
    title: String
})
</script>

<template>
    <Head :title="title"></Head>

    <div
        class="bg-gray-25"
    >
        <!-- Sidebar -->
        <!-- <Sidebar />

        <div
            style="transition-property: margin; transition-duration: 150ms"
            :class="[
                'min-h-screen flex flex-col',
                {
                    'lg:ml-[252px]': sidebarState.isOpen,
                    'md:ml-0 lg:ml-[84px]': !sidebarState.isOpen,
                },
            ]"
        > -->
        <div class="max-w-md min-h-screen flex flex-col justify-center items-center mx-auto">
            <!-- Navbar -->
            <Navbar :title="title" />

            <!-- Page Content -->
            <main class="w-full flex flex-col flex-1 items-center pt-3">
                <div class="w-full flex flex-col justify-center items-center px-3">
                    <ToastList />
                    <ConfirmationDialog />
                    <NotificationDialog />
                    <slot />
                </div>
            </main>

            <div class="mt-20">
                <PageFooter />
            </div>

        </div>
    </div>
</template>
