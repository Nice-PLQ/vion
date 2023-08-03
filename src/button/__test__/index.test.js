import { mount } from '@vue/test-utils';
import Button from '../button.vue';

describe('Button', () => {
  const wrapper = mount(Button, {
    slots: {
      default: '按钮'
    }
  });

  test('按钮类型', async () => {
    await wrapper.setProps({ type: 'primary' });
    expect(wrapper.classes('v-button_primary')).toBe(true);
    expect(wrapper.element).toMatchSnapshot();
  });

  test('按钮大小', async () => {
    await wrapper.setProps({ size: 'large' });
    expect(wrapper.classes('v-button_large')).toBe(true);
  });

  test('按钮禁用', async () => {
    await wrapper.setProps({ disabled: true });
    wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });

  test('按钮加载态', async () => {
    await wrapper.setProps({ loading: true });
    expect(wrapper.classes('v-button_loading')).toBe(true);
    expect(wrapper.findComponent('.v-loading')).toBeTruthy();
  });
});
