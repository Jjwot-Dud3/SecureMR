import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify,{
    
});

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#f5f5f5',
            accent: '#E8458B',
            anchor: '#8c9eff',
          },
        },
      },
});
