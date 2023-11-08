import { mount } from '@vue/test-utils';
import { next, triggerDrag } from '../../../test';
import VTab from '../tab.vue';
import VTabPanel from '../../tab-panel';

describe('Tab', () => {
  const consoleOutput = [];
  beforeEach(() => {
    console.error = output => consoleOutput.push(output);
    console.log = output => consoleOutput.push(output);
  });
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

  test('渲染', async () => {
    const tabItem = wrapper.findAll('.v-tab__item')[2];
    await tabItem.trigger('click');
    expect(tabItem.classes()).toContain('on');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('tab拖动', () => {
    const el = wrapper.find('.v-tab__nav');
    triggerDrag(el, 50, 0);
    expect(el.element.style.webkitTransition).toMatch(/cubic-bezier/);
  });

  test('tab数据格式', async () => {
    const fn = jest.fn();
    const wrapper = mount({
      template: `
        <v-tab @change="onChange" v-model="active">
          <v-tab-panel v-for="(tab,index) in tabs" :title="tab.title" :name="tab.name" :key="index">{{tab.title}}</v-tab-panel>
        </v-tab>
      `,
      data() {
        return {
          tabs: [
            { title: '好友', name: 'a' },
            { title: '分组', name: 'b' },
            { title: '群聊', name: 'c' }
          ],
          active: 'a'
        };
      },
      methods: {
        onChange: fn
      }
    }, {
      global: {
        components: { VTab, VTabPanel }
      }
    });

    await next();
    const tabItem = wrapper.findAll('.v-tab__item')[2];
    await tabItem.trigger('click');
    expect(fn).toHaveBeenCalled();
    expect(wrapper.element).toMatchSnapshot();
  });

  test('name属性重复校验', async () => {
    const wrapper = mount({
      template: `
        <v-tab>
          <v-tab-panel v-for="(tab,index) in tabs" :title="tab.title" :name="tab.name" :key="index">{{tab.title}}</v-tab-panel>
        </v-tab>
      `,
      data() {
        return {
          tabs: [
            { title: '好友', name: 'a' },
            { title: '分组', name: 'a' }
          ]
        };
      }
    }, {
      global: {
        components: { VTab, VTabPanel }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(consoleOutput).toContain("duplicated 'name' property at v-tab-panel component");
  });
});
