<script setup>
import { EmptyRecordIcon } from '@/Components/Icons/solid';
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  message: String
});
</script>

<template>
  <div class="flex flex-col justify-center items-center py-5 px-6 gap-5 self-stretch">
    <!-- Slot for custom image or content -->
    <slot name="image">
      <!-- Default image content if no custom content is provided -->
      <EmptyRecordIcon class="w-60 h-[180px]" />
    </slot>

    <div class="flex flex-col items-center gap-2 self-stretch">
      <!-- Slot for custom title -->
      <slot name="title">
        <div v-if="title" class="self-stretch text-gray-950 text-center font-semibold text-sm md:text-base">
          {{ title }}
        </div>
      </slot>

      <!-- Slot for custom message -->
      <slot name="message">
        <div v-if="message" class="self-stretch text-gray-700 text-center text-xs md:text-sm">
          {{ message }}
        </div>
      </slot>
    </div>
  </div>
</template>
