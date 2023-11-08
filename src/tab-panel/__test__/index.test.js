import { mount } from '@vue/test-utils';
import VTabPanel from '../tab-panel.vue';
import VTab from '../../tab';

describe('TabPanel', () => {
  test('渲染', () => {
    const wrapper = mount({
      template: `
        <v-tab>
          <v-tab-panel v-for="(tab,index) in tabs" :title="tab" :key="index">{{tab}}</v-tab-panel>
        </v-tab>
      `,
      data() {
        return {
          tabs: [
            '热门赛事',
            'QQ飞车手游',
            '英雄联盟',
            '王者荣耀',
            '和平精英'
          ]
        };
      }
    }, {
      global: {
        components: { VTab, VTabPanel }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
