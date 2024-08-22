<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Button from "@/Components/Button.vue";
import {ref, h, watch, onMounted, computed} from "vue";
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import IndividualAccounts from '@/Pages/Dashboard/Partials/IndividualAccounts.vue';
import ManagedAccounts from '@/Pages/Dashboard/Partials/ManagedAccounts.vue';
import { usePage, useForm } from "@inertiajs/vue3";
import { trans, wTrans } from "laravel-vue-i18n";

const tabs = ref([
    { title: wTrans('public.individual'), component: h(IndividualAccounts), type: 'individual' },
    { title: wTrans('public.managed'), component: h(ManagedAccounts), type: 'manage' },
]);

const selectedType = ref('individual');
const activeIndex = ref(tabs.value.findIndex(tab => tab.type === selectedType.value));

// Watch for changes in selectedType and update the activeIndex accordingly
watch(selectedType, (newType) => {
    const index = tabs.value.findIndex(tab => tab.type === newType);
    if (index >= 0) {
        activeIndex.value = index;
    }
});

function updateType(event) {
    const selectedTab = tabs.value[event.index];
    selectedType.value = selectedTab.type;
}

</script>


<template>
    <AuthenticatedLayout :title="$t('public.dashboard')">
        <div class="flex flex-col items-center gap-5 self-stretch">
            <div class="flex items-center self-stretch">
                <TabView class="flex flex-col" :activeIndex="activeIndex" @tab-change="updateType">
                    <TabPanel v-for="(tab, index) in tabs" :key="index" :header="tab.title" />
                </TabView>
            </div>

            <component :is="tabs[activeIndex]?.component" />
        </div>
    </AuthenticatedLayout>
</template>
