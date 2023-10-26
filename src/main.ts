import './assets/main.css'

import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import '/node_modules/primeflex/primeflex.css'
import ConfirmationService from 'primevue/confirmationservice'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import MegaMenu from 'primevue/megamenu'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'
import Sidebar from 'primevue/sidebar'
import ConfirmDialog from 'primevue/confirmdialog'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional

const app = createApp(App)

app.use(createPinia())
app.use(router)
app
  .use(PrimeVue)
  .use(ConfirmationService)
  .component('MegaMenu', MegaMenu)
  .component('Button', Button)
  .component('Calendar', Calendar)
  .component('Sidebar', Sidebar)
  .component('DataTable', DataTable)
  .component('Column', Column)
  .component('ColumnGroup', ColumnGroup)
  .component('Row', Row)
  .component('InputText', InputText)
  .component('ConfirmDialog', ConfirmDialog)

app.mount('#app')
