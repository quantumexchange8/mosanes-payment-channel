import './bootstrap';
import '../css/app.css';
import Aura from '../css/presets/aura'

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { i18nVue } from 'laravel-vue-i18n'
import PrimeVue from "primevue/config";
import ConfirmationService from 'primevue/confirmationservice';
import Tooltip from 'primevue/tooltip';
import iosZoomFix from '../js/Composables/ios-zoom-fix.js';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue')
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(i18nVue, {
                resolve: async lang => {
                    const langs = import.meta.glob('../../lang/*.json');
                    if (typeof langs[`../../lang/${lang}.json`] == "undefined") return; //Temporary workaround
                    return await langs[`../../lang/${lang}.json`]();
                }
            })
            .use(PrimeVue, {
                unstyled: true,
                pt: Aura
            })
            .use(ConfirmationService)
            .directive('tooltip', Tooltip);

        app.mount(el);

        // Run the iOS zoom fix
        iosZoomFix();
    },
    progress: {
        color: '#2B398C'
    }
})

