<script setup>
import { Link } from '@inertiajs/vue3'
import ApplicationLogo from '@/Components/ApplicationLogo.vue'
import { sidebarState } from '@/Composables'
import { IconX } from '@tabler/icons-vue';
</script>

<template>
    <div class="flex gap-2 pr-2 lg:pr-5 px-5 py-[18px] w-full">
        <Link :href="route('dashboard')" class="w-full flex items-center">
            <div class="flex items-center self-stretch gap-2">
                <div class="px-2">
                    <ApplicationLogo aria-hidden="true" class="w-7 h-7 fill-logo" />
                </div>
                <div
                    v-show="sidebarState.isOpen || sidebarState.isHovered"
                    class="text-lg font-bold text-gray-800 w-full"
                >
                    Mosanes.
                </div>
            </div>
        </Link>

        <div
            class="inline-flex items-center justify-center p-3.5 hover:select-none hover:cursor-pointer lg:hidden"
            @click="sidebarState.isOpen = !sidebarState.isOpen"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
        >
            <IconX size="20" color="#182230" stroke-width="1.25" />
        </div>
    </div>
</template>
