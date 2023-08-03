import { shallowMount } from '@vue/test-utils';
import Divider from '../divider.vue';

describe('Divider', () => {
  const wrapper = shallowMount(Divider);

  test('类型', async () => {
    await wrapper.setProps({ type: 'bold' });
    expect(wrapper.classes()).toContain('v-divider_bold');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('高度', async () => {
    await wrapper.setProps({ height: '48px' });
    expect(wrapper.element.style.height).toBe('48px');
  });

  test('颜色', async () => {
    await wrapper.setProps({ color: '#B0B3BF' });
    expect(wrapper.element.style.backgroundColor).toBe('rgb(176, 179, 191)');
  });
});
