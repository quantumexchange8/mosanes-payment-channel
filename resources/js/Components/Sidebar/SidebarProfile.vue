<script setup>
import DefaultProfilePhoto from "@/Components/DefaultProfilePhoto.vue";
import {usePage} from "@inertiajs/vue3";
import { Link } from '@inertiajs/vue3'
import {sidebarState} from "@/Composables/index.js";

const user = usePage().props.auth.user;
const $page = usePage();
</script>

<template>
    <div class="flex flex-col items-center py-3 px-5 self-stretch">
        <Link
            :href="route('profile')"
            :class="[
            'flex items-center gap-3 self-stretch rounded-lg group select-none cursor-pointer transition-colors',
            {
                'text-gray-950 hover:text-primary-500 hover:bg-primary-50': !route().current('profile'),
                'text-white bg-primary-500': route().current('profile'),
                'p-3': sidebarState.isOpen || sidebarState.isHovered,
                'py-3 justify-center': !sidebarState.isOpen,
            },
        ]"
        >
            <div class="w-8 h-8 rounded-full overflow-hidden shrink-0 grow-0">
                <div v-if="$page.props.auth.profile_photo">
                    <img :src="$page.props.auth.profile_photo" alt="Profile Photo" />
                </div>
                <div v-else>
                    <DefaultProfilePhoto />
                </div>
            </div>

            <div v-show="sidebarState.isOpen || sidebarState.isHovered" class="flex flex-col items-start">
                <span
                    class="text-sm font-medium truncate max-w-[144px]"
                    :class="{
                        'text-gray-950 group-hover:text-primary-500': !route().current('profile'),
                        'text-white': route().current('profile'),
                    }"
                >{{ user.name }}</span>
                <span
                    class="text-xs truncate max-w-[144px]"
                    :class="{
                        'text-gray-500 group-hover:text-primary-500': !route().current('profile'),
                        'text-primary-100': route().current('profile'),
                    }"
                >{{ user.email }}</span>
            </div>
        </Link>
    </div>
</template>
