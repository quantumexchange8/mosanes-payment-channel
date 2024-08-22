<script setup>
import ConfirmDialog from 'primevue/confirmdialog';
import Button from "@/Components/Button.vue";
import { SecurityIcon, BulbIcon, DeleteIcon, WalletIcon, RevokeIcon, RebateIcon } from "@/Components/Icons/brand.jsx";
</script>

<template>
    <ConfirmDialog group="headless-primary">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-col items-center bg-white rounded-3xl w-[320px] h-[250px] md:w-[500px] md:h-[300px]">
                <div class="relative w-full h-[93px] md:h-[132px] flex">
                    <div
                        class="rounded-tl-3xl rounded-tr-3xl flex w-full p-1 justify-center [clip-path:polygon(0%_0%,_100%_0%,_100%_78%,_50%_100%,_0_78%)] bg-primary-700"
                    >
                        <div class="p-5 flex items-center justify-center">
                            <!-- Conditionally render the icon based on actionType -->
                            <WalletIcon v-if="message.actionType === 'crypto'" class="w-16 h-16 md:w-full md:h-auto" />
                            <RebateIcon v-if="message.actionType === 'rebate'" class="w-16 h-16 md:w-full md:h-auto" />
                            <!-- Default icon if actionType is not specified -->
                            <BulbIcon v-if="!message.actionType" class="w-16 h-16 md:w-full md:h-auto" />

                        </div>
                    </div>
                </div>
                <div class="pt-2 md:pt-3 pb-6 px-4 md:px-6 w-full flex flex-col items-center gap-5 self-stretch">
                    <div class="flex flex-col gap-1 items-center self-stretch text-center">
                        <span class="text-gray-950 text-sm md:text-base font-semibold">{{ message.header }}</span>
                        <span class="text-gray-700 text-xs md:text-sm">
                            {{ message.message.text }}
                            <span class="text-gray-950 font-semibold">{{ message.message.dynamicText }}</span>
                            {{ message.message.suffix }}
                        </span>
                    </div>
                    <div class="flex items-center gap-4 md:gap-5 self-stretch">
                        <Button
                            type="button"
                            variant="gray-tonal"
                            @click="rejectCallback"
                            class="w-full"
                            size="base"
                        >
                            {{ message.cancelButton }}
                        </Button>
                        <Button
                            type="button"
                            variant="primary-flat"
                            @click="acceptCallback"
                            class="w-full text-nowrap"
                            size="base"
                        >
                            {{ message.acceptButton }}
                        </Button>
                    </div>
                </div>
            </div>
        </template>
    </ConfirmDialog>

    <ConfirmDialog group="headless-gray">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-col items-center bg-white rounded-3xl w-[320px] h-[250px] md:w-[500px] md:h-[300px]">
                <div class="relative w-full h-[93px] md:h-[132px] flex">
                    <div
                        class="rounded-tl-3xl rounded-tr-3xl flex w-full p-1 justify-center [clip-path:polygon(0%_0%,_100%_0%,_100%_78%,_50%_100%,_0_78%)] bg-gray-900"
                    >
                        <div class="p-5 flex items-center justify-center">
                            <SecurityIcon class="w-16 h-16 md:w-full md:h-auto" />
                        </div>
                    </div>
                </div>
                <div class="pt-2 md:pt-3 pb-6 px-4 md:px-6 w-full flex flex-col items-center gap-5 self-stretch">
                    <div class="flex flex-col gap-1 items-center self-stretch text-center">
                        <span class="text-gray-950 text-sm md:text-base font-semibold">{{ message.header }}</span>
                        <span class="text-gray-700 text-xs md:text-sm">
                            {{ message.message.text }}
                            <span class="text-gray-950 font-semibold">{{ message.message.dynamicText }}</span>
                            {{ message.message.suffix }}
                        </span>
                    </div>
                    <div class="flex items-center gap-4 md:gap-5 self-stretch">
                        <Button
                            v-if="message.cancelButton"
                            type="button"
                            variant="gray-tonal"
                            @click="rejectCallback"
                            class="w-full"
                            size="base"
                        >
                            {{ message.cancelButton }}
                        </Button>
                        <Button
                            type="button"
                            variant="gray-flat"
                            @click="acceptCallback"
                            class="w-full text-nowrap"
                            size="base"
                        >
                            {{ message.acceptButton }}
                        </Button>
                    </div>
                </div>
            </div>
        </template>
    </ConfirmDialog>

    <ConfirmDialog group="headless-error">
        <template #container="{ message, acceptCallback, rejectCallback }">
            <div class="flex flex-col items-center bg-white rounded-3xl w-[320px] h-[250px] md:w-[500px] md:h-[300px]">
                <div class="relative w-full h-[93px] md:h-[132px] flex">
                    <div
                        class="rounded-tl-3xl rounded-tr-3xl flex w-full p-1 justify-center [clip-path:polygon(0%_0%,_100%_0%,_100%_78%,_50%_100%,_0_78%)] bg-error-600"
                    >
                        <div class="p-5 flex items-center justify-center">
                            <!-- Conditionally render the icon based on actionType -->
                            <DeleteIcon v-if="message.actionType === 'delete'" class="w-16 h-16 md:w-full md:h-auto" />
                            <RevokeIcon v-if="message.actionType === 'revoke'" class="w-16 h-16 md:w-full md:h-auto" />
                            <!-- Default icon if actionType is not specified -->
                            <DeleteIcon v-if="!message.actionType" class="w-16 h-16 md:w-full md:h-auto" />
                        </div>
                    </div>
                </div>
                <div class="pt-2 md:pt-3 pb-6 px-4 md:px-6 w-full flex flex-col items-center gap-5 self-stretch">
                    <div class="flex flex-col gap-1 items-center self-stretch text-center">
                        <span class="text-gray-950 text-sm md:text-base font-semibold">{{ message.header }}</span>
                        <span class="text-gray-700 text-xs md:text-sm">
                            {{ message.message.text }}
                            <span class="text-gray-950 font-semibold">{{ message.message.dynamicText }}</span>
                            {{ message.message.suffix }}
                        </span>
                    </div>
                    <div class="flex items-center gap-4 md:gap-5 self-stretch">
                        <Button
                            type="button"
                            variant="gray-tonal"
                            @click="rejectCallback"
                            class="w-full"
                            size="base"
                        >
                            {{ message.cancelButton }}
                        </Button>
                        <Button
                            type="button"
                            variant="error-flat"
                            @click="acceptCallback"
                            class="w-full text-nowrap"
                            size="base"
                        >
                            {{ message.acceptButton }}
                        </Button>
                    </div>
                </div>
            </div>
        </template>
    </ConfirmDialog>
</template>
