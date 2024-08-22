<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import {Link, useForm, usePage} from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Button from '@/Components/Button.vue';
import {watchEffect} from "vue";
import {useConfirm} from "primevue/useconfirm";
import {trans} from "laravel-vue-i18n";
import {Inertia} from "@inertiajs/inertia";

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

const confirm = useConfirm();

watchEffect(() => {
    if (usePage().props.user_status !== null) {
        confirm.require({
            group: 'headless-gray',
            header: trans('public.account_deactivated'),
            message: {
                text: trans('public.account_deactivated_desc'),
            },
            acceptButton: trans('public.alright'),
        });
    }
});
</script>

<template>
    <GuestLayout :title="$t('public.login')">
        <!-- <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div> -->

        <div class="w-full flex flex-col justify-center items-center gap-8">
            <div class="w-full flex flex-col items-center gap-6 self-stretch">
                <div class="rounded-lg bg-logo w-16 h-16 p-2 flex items-center justify-center">
                    <ApplicationLogo class="w-12 h-12 fill-white" />

                </div>
                <div class="w-full flex flex-col items-start gap-3 self-stretch">
                    <div class="self-stretch text-center text-gray-950 text-lg font-bold">{{ $t('public.login_header') }}</div>
                    <div class="self-stretch text-center text-gray-500 text-sm">{{ $t('public.login_header_caption') }}</div>
                </div>
            </div>
            <form @submit.prevent="submit" class="flex flex-col items-center gap-6 self-stretch">
                <div class="flex flex-col items-start gap-5 self-stretch">
                    <div class="flex flex-col items-start gap-1 self-stretch">
                        <InputLabel for="email" :value="$t('public.email')" :invalid="!!form.errors.email" />

                        <InputText
                            id="email"
                            type="email"
                            class="block w-full"
                            v-model="form.email"
                            autofocus
                            :placeholder="$t('public.enter_your_email')"
                            :invalid="!!form.errors.email"
                            autocomplete="username"
                        />

                        <InputError :message="form.errors.email" />
                    </div>

                    <div class="flex flex-col items-start gap-1 self-stretch">
                        <InputLabel
                            for="password"
                            :value="$t('public.password')"
                            :invalid="!!form.errors.password"
                        />

                        <Password
                            v-model="form.password"
                            toggleMask
                            placeholder="••••••••"
                            :invalid="!!form.errors.password"
                            :feedback="false"
                        />

                        <InputError :message="form.errors.password" />
                    </div>
                </div>
                <div class="flex justify-between items-center self-stretch">
                    <label class="flex items-center cursor-pointer gap-2">
                        <Checkbox name="remember" v-model:checked="form.remember" />
                        <span class="text-sm text-gray-600 font-medium">{{ $t('public.remember_me') }}</span>
                    </label>
                </div>
                <Button
                    variant="primary-flat"
                    size="base"
                    class="w-full"
                    :disabled="form.processing"
                >
                    {{ $t('public.sign_in') }}
                </Button>
            </form>
        </div>
    </GuestLayout>
</template>
