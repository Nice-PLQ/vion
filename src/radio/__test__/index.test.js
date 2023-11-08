import { mount } from '@vue/test-utils';
import Radio from '../radio.vue';

describe('Radio', () => {
  const wrapper = mount(Radio, {
    slots: {
      default: '<span>单选框</span>'
    },
    props: {
      size: '26px',
      checkedColor: '#67C23A'
    }
  });

  const childWrapper = wrapper.find('.v-radio__icon');

  test('选中', async () => {
    await wrapper.setProps({ checked: true });
    expect(childWrapper.classes()).toContain('v-radio_checked');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('大小及选中后的背景色', () => {
    expect(childWrapper.element.style.fontSize).toBe('26px');
    expect(childWrapper.element.style.backgroundColor).toBe('rgb(103, 194, 58)');
  });

  test('方形的单选框', async () => {
    await wrapper.setProps({ shape: 'square' });
    expect(childWrapper.classes()).toContain('v-radio_square');
  });

  test('单选框的文本标签', () => {
    expect(wrapper.find('.v-radio__label').text()).toBe('单选框');
  });

  test('click & change事件触发', async () => {
    await wrapper.setProps({ checked: false });
    expect(wrapper.find('input[type="radio"]').element.checked).toBe(false);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  test('单选框禁用', async () => {
    const innerWrapper = mount(Radio, {
      props: {
        disabled: true
      }
    });
    await innerWrapper.trigger('click');
    expect(innerWrapper.emitted('click')).toBeFalsy();
  });
});
