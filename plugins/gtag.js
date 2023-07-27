import Vue from 'vue';
import VueGtag from 'vue-gtag';
Vue.use(VueGtag, {
    config: {
        id: 'G-T39XGR8R0Y',
        custom_map: {
            page_module: 'page_module',
            main_module_id: 'main_module_id',
            page_sysnm: 'page_sysnm',
            group_id: 'group_id',
        }
      },
    event:{
        any_event_name: {
            page_module: 'page_module',
            main_module_id: 'main_module_id',
            page_sysnm: 'page_sysnm',
            group_id: 'group_id',
        }
    }
});