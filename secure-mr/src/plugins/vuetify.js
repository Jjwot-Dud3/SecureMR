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
            p1:'#5E315D',
            p2: '#AC3B7C',
            p3:'#E8458B',
            g1: '#f5f5f5',
            g2:'#F7F3E8',
            g3: '#9E9E9E',
            b1:'0278A1',
          },
        },
      },
});
