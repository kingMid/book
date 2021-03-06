import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//完全引入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

//按需引入

import { Calendar ,Icon,Button ,Cell, CellGroup,NavBar, Tabbar, TabbarItem, Col, Row ,Tab, Tabs,NumberKeyboard ,Field} from 'vant';
import {Sidebar, SidebarItem,Pagination,Toast,Uploader   } from 'vant';
Vue.use(Calendar).use(Button).use(Cell).use(CellGroup).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Col).use(Row).use(Tab).use(Tabs).use(NumberKeyboard).use(Field );
Vue.use(Sidebar).use(Toast).use(SidebarItem).use(Pagination).use(Uploader);
Vue.config.productionTip = false
import '@/assets/css/rest.css'
import '@/assets/js/rem.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
