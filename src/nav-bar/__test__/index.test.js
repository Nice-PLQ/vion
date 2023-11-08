import { mount } from '@vue/test-utils';
import NavBar from '../nav-bar.vue';

describe('NavBar', () => {
  test('渲染', async () => {
    const wrapper = mount(NavBar, {
      props: {
        leftIcon: 'close',
        leftText: '返回',
        rightIcon: 'share',
        rightText: '设置',
        theme: 'black'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('v-navbar_black');
    await wrapper.find('.v-navbar__back').trigger('click');
    await wrapper.find('.v-navbar__left').trigger('click');
    await wrapper.find('.v-navbar__title').trigger('click');
    await wrapper.find('.v-navbar__right').trigger('click');
    await wrapper.find('.v-navbar__right-text').trigger('click');
    expect(wrapper.emitted('back')).toBeTruthy();
    expect(wrapper.emitted('left-click')).toBeTruthy();
    expect(wrapper.emitted('title-click')).toBeTruthy();
    expect(wrapper.emitted('right-click')).toBeTruthy();
    expect(wrapper.emitted('right-text-click')).toBeTruthy();
  });

  test('slots', () => {
    const wrapper = mount(NavBar, {
      slots: {
        left: '<span>left</span>',
        right: '<span>right</span>',
        title: '<span>title</span>'
      },
      props: {
        leftIcon: 'close',
        leftText: '返回',
        rightIcon: 'share',
        rightText: '设置'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
