import { mount } from '@vue/test-utils';
import VTabbar from '../tabbar.vue';
import VTabbarItem from '../../tabbar-item';
import VIcon from '../../icon';

describe('Tabbar', () => {
  const fn = jest.fn();
  const wrapper = mount({
    template: `
      <v-tabbar v-model="current" active-color="#00CAFC" inactive-color="#03081A" @change="onChange">
        <v-tabbar-item v-for="(tab, index) in tabs" :key="index">
          <template #icon>
            <v-icon :name="tab.icon" />
          </template>
          {{tab.label}}
        </v-tabbar-item>
      </v-tabbar>
    `,
    data() {
      return {
        current: 0,
        tabs: [
          { label: 'QQ', icon: 'qq' },
          { label: 'QZone', icon: 'qzone' },
          { label: 'Wechat', icon: 'wechat' },
        ]
      };
    },
    methods: {
      onChange: fn
    }
  }, {
    global: {
      components: { VTabbar, VTabbarItem, VIcon }
    }
  });

  test('渲染', async () => {
    const tabItem = wrapper.findAll('.v-tabbar-item')[1];
    await tabItem.trigger('click');
    expect(tabItem.classes()).toContain('on');
    const tabItemContent = tabItem.find('.v-tabbar-item__content');
    expect(tabItemContent.element.style.color).toBe('rgb(0, 202, 252)');
    expect(wrapper.element).toMatchSnapshot();
    expect(fn).toHaveBeenCalled();
  });
});
