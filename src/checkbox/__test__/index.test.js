import { mount } from '@vue/test-utils';
import Checkbox from '../checkbox.vue';

describe('Checkbox', () => {
  const wrapper = mount(Checkbox, {
    slots: {
      default: '<span>多选框</span>'
    },
    props: {
      size: '26px',
      checkedColor: '#67C23A'
    }
  });

  const childWrapper = wrapper.find('.v-checkbox__icon');

  test('选中', async () => {
    await wrapper.setProps({ checked: true });
    expect(childWrapper.classes()).toContain('v-checkbox_checked');
    expect(wrapper.element).toMatchSnapshot();
  });

  test('大小及选中后的背景色', () => {
    expect(childWrapper.element.style.fontSize).toBe('26px');
    expect(childWrapper.element.style.backgroundColor).toBe('rgb(103, 194, 58)');
  });

  test('方形的多选框', async () => {
    await wrapper.setProps({ shape: 'square' });
    expect(childWrapper.classes()).toContain('v-checkbox_square');
  });

  test('多选框的文本标签', () => {
    expect(wrapper.find('.v-checkbox__label').text()).toBe('多选框');
  });

  test('click & change事件触发', async () => {
    await wrapper.setProps({ checked: false });
    expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(false);
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  test('多选框禁用', async () => {
    const innerWrapper = mount(Checkbox, {
      props: {
        disabled: true
      }
    });
    await innerWrapper.trigger('click');
    expect(innerWrapper.emitted('click')).toBeFalsy();
  });
});
