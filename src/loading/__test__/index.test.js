import { mount } from '@vue/test-utils';
import Loading from '..';

describe('Loading', () => {
  test('普通的loading', () => {
    const wrapper = mount({
      template: '<v-loading>正在加载..</v-loading>'
    }, {
      global: {
        components: { VLoading: Loading }
      }
    });
    const loading = wrapper.find('.v-loading');
    expect(loading.element).toMatchSnapshot();
    expect(loading.classes()).toContain('v-loading_normal');
    expect(loading.find('.v-loading__txt-tips').text()).toBe('正在加载..');
  });

  test('悬浮的loading', async () => {
    const wrapper = mount({
      template: '<v-loading />'
    }, {
      props: {
        type: 'float',
        text: '正在加载',
        visible: false,
        duration: 1000
      },
      global: {
        components: { VLoading: Loading }
      }
    });
    await wrapper.setProps({ visible: true });
    const loading = wrapper.find('.v-loading');
    expect(loading.element).toMatchSnapshot();
    expect(loading.classes()).toContain('v-loading_float');
    expect(loading.find('.v-loading__txt-tips').text()).toBe('正在加载');
  });
});
