import { mount } from '@vue/test-utils';
import Progress from '../progress.vue';

describe('Progress', () => {
  test('渲染', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 0.5
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  test('边界判断', async () => {
    const wrapper = mount(Progress, {
      props: {
        value: 1.5
      }
    });
    expect(wrapper.find('.v-progress__text').text()).toBe('100%');
    await wrapper.setProps({ value: -0.5 });
    expect(wrapper.find('.v-progress__text').text()).toBe('0%');
  });

  test('样式', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 0.5,
        showTxt: false,
        background: 'rgb(103, 194, 58)',
        height: '10px'
      }
    });
    expect(wrapper.find('.v-progress__text').exists()).toBe(false);
    expect(wrapper.find('.v-progress__inner').element.style.background).toBe('rgb(103, 194, 58)');
  });

  test('环形进度条', () => {
    const wrapper = mount(Progress, {
      props: {
        value: 0.5,
        type: 'circle',
      }
    });

    // console.log(wrapper.element);
    expect(wrapper.find('.v-progress__circle-text').text()).toBe('50%');
  });
});
