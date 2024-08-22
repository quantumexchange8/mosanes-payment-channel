<script setup>
import dayjs from "dayjs";

</script>

<template>
    <footer class="flex flex-col gap-3 flex-shrink-0 p-5 bg-gray-100">
        <div class="flex flex-col gap-1 items-start self-stretch">
            <span class="text-gray-700 text-xs font-semibold">{{ $t('public.risk_warning') }}</span>
            <span class="text-gray-500 text-xxs">{{ $t('public.risk_warning_desc') }}</span>
        </div>
        <span class="text-gray-500 text-xxs">Copyright © Mosanes {{ dayjs().year() }}. All rights reserved.</span>
    </footer>
</template>
