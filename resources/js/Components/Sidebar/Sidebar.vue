<script setup>
import { onMounted } from 'vue'
import { router } from '@inertiajs/vue3'
import { sidebarState } from '@/Composables'
import SidebarHeader from '@/Components/Sidebar/SidebarHeader.vue'
import SidebarContent from '@/Components/Sidebar/SidebarContent.vue'
import SidebarFooter from '@/Components/Sidebar/SidebarFooter.vue'
import SidebarProfile from "@/Components/Sidebar/SidebarProfile.vue";

onMounted(() => {
    window.addEventListener('resize', sidebarState.handleWindowResize)

    router.on('navigate', () => {
        if (window.innerWidth <= 1024) {
            sidebarState.isOpen = false
        }
    })
})
</script>

<template>
    <transition
        enter-active-class="transition"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
        <div
            v-show="sidebarState.isOpen"
            @click="sidebarState.isOpen = false"
            class="fixed inset-0 z-20 bg-black/50 lg:hidden"
        ></div>
    </transition>

    <aside
        style="
            transition-property: width, transform;
            transition-duration: 150ms;
        "
        :class="[
            'fixed inset-y-0 z-20 bg-gray-25 flex flex-col border-r border-gray-200',
            {
                'translate-x-0 w-[252px]':
                    sidebarState.isOpen || sidebarState.isHovered,
                '-translate-x-full w-[252px] lg:w-[84px] lg:translate-x-0':
                    !sidebarState.isOpen && !sidebarState.isHovered,
            },
        ]"
        @mouseenter="sidebarState.handleHover(true)"
        @mouseleave="sidebarState.handleHover(false)"
    >
        <SidebarHeader />

        <SidebarProfile />

        <SidebarContent />

<!--        <SidebarFooter />-->
    </aside>
</template>
