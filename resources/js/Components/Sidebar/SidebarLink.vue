<script setup>
import { Link } from '@inertiajs/vue3'
import { sidebarState } from '@/Composables'
import { EmptyCircleIcon } from '@/Components/Icons/outline'
// import Badge from '@/Components/Badge.vue';

const props = defineProps({
    href: {
        type: String,
        required: false,
    },
    active: {
        type: Boolean,
        default: false,
    },
    title: {
        type: String,
        required: true,
    },
    external: {
        type: Boolean,
        default: false,
    },
    pendingCounts: Number
})

const Tag = !props.external ? Link : 'a'
</script>

<template>
    <component
        :is="Tag"
        v-if="href"
        :href="href"
        :class="[
            'p-3 flex gap-3 items-center rounded-lg transition-colors w-full',
            {
                'text-gray-950 hover:text-primary-500 hover:bg-primary-50':
                    !active,
                'text-white bg-primary-500 hover:bg-primary-600':
                    active,
            },
        ]"
    >
        <div class="max-w-5">
            <slot name="icon">
                <EmptyCircleIcon aria-hidden="true" class="flex-shrink-0 w-5 h-5" />
            </slot>
        </div>

        <div class="flex items-center gap-2 w-full">
            <span
                class="text-sm font-medium w-full"
                v-show="sidebarState.isOpen || sidebarState.isHovered"
            >
                {{ title }}
            </span>
            <!-- <Badge
                v-if="pendingCounts > 0 && (sidebarState.isOpen || sidebarState.isHovered)"
                class="text-xs text-white"
                :pill="true"
            >
                {{ pendingCounts }}
            </Badge> -->
        </div>
    </component>
    <button
        v-else
        type="button"
        :class="[
            'p-3 flex gap-3 items-center rounded-lg transition-colors w-full',
            {
                'text-gray-950 hover:text-primary-500 hover:bg-primary-50':
                    !active,
                'text-white bg-primary-500 hover:bg-primary-600':
                    active,
            },
        ]"
    >
        <slot name="icon">
            <EmptyCircleIcon aria-hidden="true" class="flex-shrink-0 w-5 h-5" />
        </slot>

        <span
            class="text-sm font-medium"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
        >
            {{ title }}
        </span>
        <slot name="arrow" />
    </button>
</template>
