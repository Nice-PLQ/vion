import { mount } from '@vue/test-utils';
import { next } from '../../../test';
import Input from '../input.vue';

describe('Input', () => {
  // 输入框
  const wrapper = mount(Input, {
    props: {
      type: 'input',
      label: '标题',
      labelAlign: 'center',
      labelWidth: '100px',
      maxLength: 10,
      showCountIndicator: true,
      showClear: true
    }
  });

  test('input渲染', () => {
    expect(wrapper.element).toMatchSnapshot();

    const label = wrapper.find('.v-input__label');
    expect(label.text()).toBe('标题');
    expect(label.element.style.textAlign).toBe('center');
    expect(label.element.style.width).toBe('100px');
    expect(wrapper.find('.v-input__indicator')).toBeTruthy();
  });

  test('输入文本', async () => {
    const input = wrapper.find('input');
    input.element.value = 'test';
    await input.trigger('input');
    expect(wrapper.emitted('change')[0][0]).toBe('test');
  });

  test('focus && blur事件触发', async () => {
    const input = wrapper.find('input');
    input.trigger('focus');
    expect(wrapper.emitted('focus')).toBeTruthy();

    input.trigger('blur');
    expect(wrapper.emitted('blur')).toBeTruthy();
    await next(50);
    expect(wrapper.vm.isFocus).toBe(false);
  });

  test('清除文本', async () => {
    wrapper.setProps({ value: 'test' });
    await wrapper.find('input').trigger('focus');
    wrapper.find('.v-input__btn-clear').trigger('click');
    expect(wrapper.emitted('change')[1][0]).toBe('');
  });

  // 文本框
  test('textarea文本框', () => {
    const wrapper = mount(Input, {
      props: {
        type: 'textarea'
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
