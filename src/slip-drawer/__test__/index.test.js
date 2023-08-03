import { mount } from '@vue/test-utils';
import SlipDrawer from '..';
import SlipDrawerGroup from '../../slip-drawer-group';
import { triggerDrag } from '../../../test';

beforeAll(() => {
  // mock DOM的offsetWidth
  Object.defineProperties(HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return 100;
      },
    },
  });
});

afterAll(() => {
  Object.defineProperties(HTMLElement.prototype, {
    offsetWidth: {
      get() {
        return parseFloat(window.getComputedStyle(this).width) || 0;
      },
    },
  });
});

describe('SlipDrawer', () => {
  test('滑动展开', async () => {
    const wrapper = mount(SlipDrawer, {
      props: {
        leftItems: [
          { text: '置顶' },
        ],
        rightItems: [
          { text: '标记为已读' },
          { text: '删除' },
        ]
      }
    });
    const el = wrapper.find('.v-slip-drawer__wrapper');
    triggerDrag(el, 30, 0);
    await el.trigger('transitionend');
    expect(wrapper.element).toMatchSnapshot();
    expect(el.element.style.transform).toMatch(/100px/);
    expect(wrapper.vm.opened).toBe(true);
    expect(wrapper.emitted().opened).toBeTruthy();
  });

  test('left-click事件触发', async () => {
    const wrapper = mount(SlipDrawer, {
      props: {
        leftItems: [
          { text: '置顶' },
        ],
      }
    });
    const el = wrapper.find('.v-slip-drawer__wrapper');
    triggerDrag(el, 300, 0);
    await el.trigger('transitionend');
    wrapper.find('.v-slip-drawer__action-btn').trigger('click');
    expect(wrapper.emitted()['left-click']).toBeTruthy();
  });

  test('right-click事件触发', async () => {
    const wrapper = mount(SlipDrawer, {
      props: {
        rightItems: [
          { text: '删除' },
        ]
      }
    });
    const el = wrapper.find('.v-slip-drawer__wrapper');
    triggerDrag(el, -300, 0);
    await el.trigger('transitionend');
    wrapper.find('.v-slip-drawer__action-btn').trigger('click');

    expect(wrapper.emitted()['right-click']).toBeTruthy();
  });

  test('小于offset时不展开', async () => {
    const wrapper = mount(SlipDrawer, {
      props: {
        offset: 50,
        rightItems: [
          { text: '删除' },
        ]
      }
    });
    const el = wrapper.find('.v-slip-drawer__wrapper');
    triggerDrag(el, -30, 0);
    await el.trigger('transitionend');
    expect(wrapper.vm.opened).toBe(false);
  });

  test('disabled禁用', async () => {
    const wrapper = mount(SlipDrawer, {
      props: {
        disabled: true,
        rightItems: [
          { text: '删除' },
        ]
      }
    });
    const el = wrapper.find('.v-slip-drawer__wrapper');
    triggerDrag(el, -30, 0);
    await el.trigger('transitionend');
    expect(wrapper.vm.opened).toBe(false);
  });

  test('组合', async () => {
    const wrapper = mount({
      template: `
        <v-slip-drawer-group>
          <v-slip-drawer :right-items="rightItems">test</v-slip-drawer>
          <v-slip-drawer :right-items="rightItems">test</v-slip-drawer>
        </v-slip-drawer-group>
      `,
      data() {
        return {
          disabled: true,
          rightItems: [
            { text: '删除' },
          ]
        };
      }
    }, {
      global: {
        components: { VSlipDrawerGroup: SlipDrawerGroup, VSlipDrawer: SlipDrawer }
      }
    });

    const el = wrapper.findAll('.v-slip-drawer__wrapper');
    triggerDrag(el[0], -30, 0);
    await el[1].trigger('transitionend');
    expect(el[1].element.style.transform).not.toMatch(/100px/);
    await wrapper.setProps({ disabled: false }); // 取消禁用
    triggerDrag(el[1], -30, 0);
    await el[1].trigger('transitionend');
    expect(wrapper.element).toMatchSnapshot();
    expect(el[1].element.style.transform).toMatch(/100px/);
  });
});
