import { shallowMount } from '@vue/test-utils';
import Switch from '../switch.vue';

describe('Switch', () => {
  const wrapper = shallowMount(Switch, {
    props: {
      size: '36px',
      activeColor: '#67C23A',
      inactiveColor: '#FF596A'
    }
  });

  test('渲染', () => {
    expect(wrapper.classes()).not.toContain('v-switch_checked');
    expect(wrapper.element.style.backgroundColor).toBe('rgb(255, 89, 106)');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('开启和关闭', async () => {
    // 开启
    await wrapper.setProps({ checked: true });
    expect(wrapper.classes()).toStrictEqual(['v-switch', 'v-switch_checked']);
    expect(wrapper.element.style.backgroundColor).toBe('rgb(103, 194, 58)');

    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('change')[0][0]).toBe(false);
    // 关闭
    await wrapper.setProps({ checked: false });
    expect(wrapper.classes()).not.toContain('v-switch_checked');
    expect(wrapper.element.style.backgroundColor).toBe('rgb(255, 89, 106)');
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('change')[1][0]).toBe(true);
  });
  test('禁用', async () => {
    const wrapper = shallowMount(Switch, {
      props: {
        disabled: true,
        checked: true
      }
    });
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });
});
