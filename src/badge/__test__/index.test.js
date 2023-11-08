import { shallowMount } from '@vue/test-utils';
import Badge from '../badge.vue';

describe('Badge', () => {
  const wrapper = shallowMount(Badge, {
    slots: {
      default: '99+'
    },
    props: {
      backgroundColor: '#B0B3BF',
      textColor: '#000',
      size: '16px'
    }
  });

  test('类型', async () => {
    await wrapper.setProps({ type: 'dot' });
    expect(wrapper.classes()).toContain('v-badge_dot');
    expect(wrapper.element).toMatchSnapshot();

    await wrapper.setProps({ type: 'capsule' });
    expect(wrapper.classes()).toContain('v-badge_capsule');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('大小', () => {
    expect(wrapper.element.style.fontSize).toBe('16px');
  });

  test('颜色', () => {
    expect(wrapper.element.style.backgroundColor).toBe('rgb(176, 179, 191)');
    expect(wrapper.element.style.color).toBe('rgb(0, 0, 0)');
  });

  test('文本', () => {
    expect(wrapper.text()).toBe('99+');
  });

  test('click事件触发', async () => {
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
