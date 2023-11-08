import { mount } from '@vue/test-utils';
import Icon from '../icon.vue';

describe('Icon', () => {
  test('图标显示', async () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'AddCircle',
        color: '#000',
        size: '24px',
      }
    });

    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('v-icon');
    expect(wrapper.element.style.color).toBe('rgb(0, 0, 0)');
    expect(wrapper.element.style.fontSize).toBe('24px');

    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
