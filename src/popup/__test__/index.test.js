import { mount } from '@vue/test-utils';
import { next } from '../../../test';
import Popup from '../popup.vue';

describe('Popup', () => {
  const wrapper = mount(Popup, {
    slots: {
      default: '<div style="height: 200px; background: #fff;"></div>'
    },
    props: {
      teleportDisabled: true,
    },
  });
  test('渲染', async () => {
    wrapper.setProps({ visible: true });
    await next();
    expect(wrapper.find('.v-popup__mask').isVisible()).toBe(true);
    expect(wrapper.find('.v-popup__content').isVisible()).toBe(true);
    expect(wrapper.find('.v-popup').element).toMatchSnapshot();
  });

  test('close事件触发', () => {
    wrapper.find('.v-popup__mask').trigger('click');
    expect(wrapper.emitted('close')).toBeTruthy();
  });
  test('测试关闭', async () => {
    wrapper.setProps({ visible: false });
    await next();
    expect(document.body.classList.length).toBe(0);
  });
  test('测试contentTransitionName', async () => {
    expect(wrapper.vm.contentTransitionName).toBe('slide-bottom');
    await wrapper.setProps({
      transitionName: 'transition'
    });
    expect(wrapper.vm.contentTransitionName).toBe('transition');
    await wrapper.setProps({
      transitionName: '',
      position: 'center'
    });
    expect(wrapper.vm.contentTransitionName).toBe('fade-zoom');
  });
});
